import { createFileRoute } from '@tanstack/react-router';
import { getPostsQuery } from '@/services/queries/useGetPostsQuery';
import queryClient from '@/services/queryClient';

export const Route = createFileRoute('/kitchen-sink/')({
  loader: async () => {
    const query = getPostsQuery();
    return {
      data:
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query)),
    };
  },
});
