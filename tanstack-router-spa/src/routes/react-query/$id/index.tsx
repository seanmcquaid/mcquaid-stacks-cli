import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import PageWrapper from '@/components/app/PageWrapper';
import { getPostQueryOptions } from '@/services/queries/posts';

const ReactQueryPostPage = () => {
  const { id } = Route.useParams();
  const { data, isLoading, isError } = useSuspenseQuery(
    getPostQueryOptions(id),
  );

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </PageWrapper>
  );
};

export const Route = createFileRoute('/react-query/$id/')({
  component: ReactQueryPostPage,
});
