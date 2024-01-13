import { Route } from './route';
import useGetPostQuery from '@/services/queries/useGetPostQuery';
import PageWrapper from '@/components/app/PageWrapper';

export const component = function ReactQueryPostPage() {
  const { id } = Route.useParams();
  const { data, isLoading, isError } = useGetPostQuery(id!);

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </PageWrapper>
  );
};
