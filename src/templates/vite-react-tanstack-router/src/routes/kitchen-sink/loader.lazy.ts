import { FileRouteLoader } from '@tanstack/react-router';
import { getPostsQuery } from '@/services/queries/useGetPostsQuery';
import queryClient from '@/services/queryClient';

export const loader = FileRouteLoader('/kitchen-sink')(async () => {
  const query = getPostsQuery();
  return {
    data:
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query)),
  };
});
