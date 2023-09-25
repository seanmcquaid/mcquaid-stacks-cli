import type { Talk } from '@prisma/client';
import { createApi } from '@reduxjs/toolkit/query/react';
import kyBaseQuery from '../kyBaseQuery';
import type CreateTalkBody from '@/types/requests/CreateTalkBody';

const talksApi = createApi({
  reducerPath: 'talksApi',
  baseQuery: kyBaseQuery({
    baseUrl: '/api',
  }),
  tagTypes: ['Talk'],
  endpoints: builder => ({
    getTalks: builder.query<Talk[], void>({
      query: () => ({ url: 'talks' }),
      providesTags: result =>
        result ? result.map(({ id }) => ({ type: 'Talk', id })) : [],
    }),
    createTalk: builder.mutation<Talk, CreateTalkBody>({
      query: json => ({ url: 'talks', method: 'POST', json }),
      invalidatesTags: ['Talk'],
    }),
  }),
});

export const { useGetTalksQuery, useCreateTalkMutation } = talksApi;

export default talksApi;
