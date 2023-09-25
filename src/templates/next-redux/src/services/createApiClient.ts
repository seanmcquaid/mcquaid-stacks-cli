import ky from 'ky';

const createApiClient = (baseUrl: string) => {
  return ky.create({
    prefixUrl: baseUrl,
    retry: {
      limit: 2,
      statusCodes: [401, 403, 500, 504],
    },
    hooks: {
      afterResponse: [
        async (request, options, response) => {
          if (!response.ok || !options.validationSchema) {
            return response;
          }

          const data = await response.json();

          const validatedData = options.validationSchema.safeParse(data);

          if (!validatedData.success) {
            return new Response(
              JSON.stringify({
                validationErrors: validatedData.error,
              }),
              {
                status: 422,
                statusText: 'API Validation Error',
              },
            );
          }

          return response;
        },
      ],
      beforeError: [
        async error => {
          try {
            const response = await error.response.json();
            error.responseData = response;
            return error;
          } catch (e) {
            return error;
          }
        },
      ],
    },
  });
};

export default createApiClient;
