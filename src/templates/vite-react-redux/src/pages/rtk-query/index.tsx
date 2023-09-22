import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import useAppTranslation from '@/i18n/useAppTranslation';
import { useDeletePostMutation, useGetPostsQuery } from '@/store/postsApi';

const ReduxToolkitQueryPage = () => {
  const { t } = useAppTranslation();
  const { data, isLoading, isError } = useGetPostsQuery();
  const [deletePost, { isLoading: deletePostLoading }] =
    useDeletePostMutation();

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{t('ReduxToolkitQueryPage.title')}</h1>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            {post.title.substring(0, 5)}
            <Button
              onClick={() => deletePost(post.id.toString())}
              disabled={deletePostLoading}
              className="ml-4"
            >
              {t('ReduxToolkitQueryPage.delete')}
            </Button>
            <LinkButton
              to={'/rtk-query/:id'}
              className="ml-4"
              params={{ id: post.id.toString() }}
            >
              {t('ReduxToolkitQueryPage.view')}
            </LinkButton>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default ReduxToolkitQueryPage;
