import { queryOptions, useQuery } from '@tanstack/react-query';
import postsService from '@/services/postsService';
import type Post from '@/types/Post';
import QueryKey from '@/constants/QueryKey';

export const getPostsQuery = () =>
  queryOptions({
    queryKey: [QueryKey.GET_POSTS],
    queryFn: () => postsService.getPosts(),
  });

const useGetPostsQuery = (initialData?: Post[]) => {
  const result = useQuery({
    ...getPostsQuery(),
    initialData,
  });

  return result;
};

export default useGetPostsQuery;
