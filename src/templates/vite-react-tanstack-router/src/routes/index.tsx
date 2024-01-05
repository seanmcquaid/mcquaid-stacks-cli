import { FileRoute } from '@tanstack/react-router';
import PageWrapper from '@/components/app/PageWrapper';
import LinkButton from '@/components/ui/LinkButton';
import useAppTranslation from '@/hooks/useAppTranslation';

const Home = () => {
  const { t } = useAppTranslation();

  return (
    <PageWrapper>
      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.subTitle')}</p>
      <LinkButton to={t('Routes.reactQuery')} className="m-4">
        {t('HomePage.reactQuery')}
      </LinkButton>
      <LinkButton to={t('Routes.reactHookFormZod')} className="m-4">
        {t('HomePage.reactHookFormZod')}
      </LinkButton>
      <LinkButton to={t('Routes.tanstackRouter')} className="m-4">
        {t('HomePage.tanstackRouter')}
      </LinkButton>
      <LinkButton to={t('Routes.kitchenSink')} className="m-4">
        {t('HomePage.kitchenSink')}
      </LinkButton>
    </PageWrapper>
  );
};

export const Route = new FileRoute('/').createRoute({
  component: Home,
});
