import { useQuery } from '@tanstack/react-query';
import postsService from '../postsService';
import QueryKey from './QueryKey';

export const getPostQuery = (id: string) => ({
  queryKey: [QueryKey.GET_POST, id],
  queryFn: async () => postsService.getPost(id),
});

const useGetPostQuery = (id: string) => {
  const result = useQuery(getPostQuery(id));

  return result;
};

export default useGetPostQuery;
