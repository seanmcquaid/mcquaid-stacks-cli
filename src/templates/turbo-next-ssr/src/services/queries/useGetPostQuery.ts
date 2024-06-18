import { useQuery } from '@tanstack/react-query';
import postsService from '@/services/postsService';
import QueryKey from '@/constants/QueryKey';
import type Post from '@/types/Post';

export const getPostQuery = (id: string) => ({
  queryKey: [QueryKey.GET_POST, id],
  queryFn: async () => postsService.getPost(id),
});

const useGetPostQuery = (id: string, initialData?: Post) => {
  const result = useQuery({ ...getPostQuery(id), initialData });

  return result;
};

export default useGetPostQuery;
