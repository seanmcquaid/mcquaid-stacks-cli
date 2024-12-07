import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import LinkButton from '@/components/ui/LinkButton';
import { getPostsQueryOptions } from '@/services/queries/posts';

const KitchenSinkPage = () => {
  const { data: posts } = useSuspenseQuery(getPostsQueryOptions());
  return (
    <div>
      <ul className="grid grid-cols-2">
        {posts?.map(post => (
          <li key={post.id} className="mt-4 flex items-center">
            <LinkButton
              to="/react-query/$id"
              params={{ id: post.id.toString() }}
            >
              {post.title.substring(0, 4)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Route = createFileRoute('/kitchen-sink/')({
  component: KitchenSinkPage,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getPostsQueryOptions()),
});
