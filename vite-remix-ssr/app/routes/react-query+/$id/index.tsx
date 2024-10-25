import { useNavigate, useParams } from '@remix-run/react';
import PageWrapper from '@/components/app/PageWrapper';
import useGetPostQuery from '@/services/queries/useGetPostQuery';

const ReactQueryPostPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(id!);
  const navigate = useNavigate();

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <button onClick={() => navigate(-1)}>BACK</button>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </PageWrapper>
  );
};

export default ReactQueryPostPage;
