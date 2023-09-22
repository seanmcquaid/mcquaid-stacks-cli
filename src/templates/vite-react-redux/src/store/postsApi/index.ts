import { createApi } from '@reduxjs/toolkit/query/react';
import kyBaseQuery from '@/store/kyBaseQuery';
import type Post from '@/types/Post';

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: kyBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['post', 'postDetails'],
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: 'posts',
      }),
      providesTags: result =>
        result ? result.map(({ id }) => ({ type: 'post', id })) : [],
    }),
    getPost: builder.query<Post, string>({
      query: id => ({
        url: `posts/${id}`,
      }),
      providesTags: result => [{ type: 'postDetails', id: result?.id }],
    }),
    deletePost: builder.mutation<void, string>({
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'post' }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation } =
  postsApi;

export default postsApi;
