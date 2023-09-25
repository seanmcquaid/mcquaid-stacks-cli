import createApiClient from '@/services/createApiClient';
import type { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import type { HTTPError, Options } from 'ky';

interface KyBaseQuery extends Options {
  url: string;
}

interface KyBaseQueryError {
  status: number;
  responseData: unknown;
  statusText: string;
}

const kyBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<KyBaseQuery, unknown, KyBaseQueryError> =>
  async ({ url, ...rest }) => {
    try {
      const apiClient = createApiClient(baseUrl);
      const result = await apiClient(url, {
        method: rest.method ?? 'get',
        ...rest,
      });
      return { data: await result.json() };
    } catch (err) {
      const httpError = err as HTTPError;

      return {
        error: {
          status: httpError.response?.status,
          statusText: httpError.response?.statusText,
          responseData: httpError?.responseData,
        },
      };
    }
  };

export default kyBaseQuery;
