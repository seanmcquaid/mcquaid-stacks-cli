import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import useAppTranslation from '@/hooks/useAppTranslation';
import useDeletePostMutation from '@/services/mutations/useDeletePostMutation';
import useGetPostsQuery from '@/services/queries/useGetPostsQuery';

const ReactQueryPage = () => {
  const { t } = useAppTranslation();
  const { data, isLoading, isError } = useGetPostsQuery();
  const { mutate: deletePost, isPending: deletePostLoading } =
    useDeletePostMutation();

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{t('ReactQueryPage.title')}</h1>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            {post.title.substring(0, 5)}
            <Button
              onClick={() => deletePost(post.id.toString())}
              disabled={deletePostLoading}
              className="ml-4"
            >
              {t('ReactQueryPage.delete')}
            </Button>
            <LinkButton
              to={`${t('Routes.reactQuery')}/${post.id}`}
              className="ml-4"
            >
              {t('ReactQueryPage.view')}
            </LinkButton>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default ReactQueryPage;
