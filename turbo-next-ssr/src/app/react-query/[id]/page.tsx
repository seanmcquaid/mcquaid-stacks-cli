'use client';
import { useParams, useRouter } from 'next/navigation';
import PageWrapper from '@/components/app/PageWrapper';
import { useGetPostQuery } from '@/hooks/services/posts';

const ReactQueryPostPage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading, isError } = useGetPostQuery(id);
  const router = useRouter();

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <button onClick={() => router.back()}>BACK</button>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </PageWrapper>
  );
};

export default ReactQueryPostPage;
