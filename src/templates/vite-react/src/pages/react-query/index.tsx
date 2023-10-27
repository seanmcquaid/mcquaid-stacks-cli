import PageWrapper from '@/components/app/PageWrapper';
import LinkButton from '@/components/ui/LinkButton';
import useAppTranslation from '@/i18n/useAppTranslation';
import useGetPostsQuery from '@/services/queries/useGetPostsQuery';
import DeleteButton from './DeleteButton';

const ReactQueryPage = () => {
  const { t } = useAppTranslation();
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{t('ReactQueryPage.title')}</h1>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            {post.title.substring(0, 5)}
            <DeleteButton id={post.id} />
            <LinkButton
              to={'/react-query/:id'}
              className="ml-4"
              params={{ id: post.id.toString() }}
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
