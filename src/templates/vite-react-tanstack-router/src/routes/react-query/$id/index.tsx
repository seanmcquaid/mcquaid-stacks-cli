import { FileRoute } from '@tanstack/react-router';
import PageWrapper from '@/components/app/PageWrapper';
import useGetPostQuery from '@/services/queries/useGetPostQuery';

const ReactQueryParams = () => {
  const { id } = Route.useParams();
  const { data, isLoading, isError } = useGetPostQuery(id!);

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </PageWrapper>
  );
};

export const Route = new FileRoute('/react-query/$id/').createRoute({
  component: ReactQueryParams,
});
