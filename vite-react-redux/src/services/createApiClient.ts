import ky from 'ky';

const createApiClient = (baseUrl: string) => {
  return ky.create({
    prefixUrl: baseUrl,
    retry: {
      limit: 2,
      statusCodes: [401, 403, 500, 504],
    },
    hooks: {
      beforeRequest: [
        request => {
          request.headers.set('X-Requested-With', 'ky');
        },
      ],
      beforeRetry: [
        async ({ request }) => {
          const token = 'refreshed-token';
          request.headers.set('Authorization', `token ${token}`);
        },
      ],
      afterResponse: [
        async (request, options, response) => {
          if (!response.ok || !options.validationSchema) {
            return response;
          }

          try {
            const data = await response.json();
            return new Response(
              JSON.stringify(options.validationSchema.parse(data)),
            );
          } catch (e) {
            console.log(request, e);
            throw e;
          }
        },
      ],
      beforeError: [
        error => {
          console.log(error);
          return error;
        },
      ],
    },
  });
};

export default createApiClient;
