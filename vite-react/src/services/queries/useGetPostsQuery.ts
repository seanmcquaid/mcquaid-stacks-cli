import { useQuery } from '@tanstack/react-query';
import postsService from '../postsService';
import Post from '../../types/Post';
import QueryKey from '../QueryKey';

export const getPostsQuery = () => ({
  queryKey: [QueryKey.GET_POSTS],
  queryFn: () => postsService.getPosts(),
});

const useGetPostsQuery = (initialData?: Post[]) => {
  const result = useQuery({
    ...getPostsQuery(),
    initialData: initialData ?? [],
  });

  return result;
};

export default useGetPostsQuery;
