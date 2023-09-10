import PageWrapper from '@/components/app/PageWrapper';
import { buttonVariants } from '@/components/ui/Button';
import useAppTranslation from '@/i18n/useAppTranslation';
import { Link } from '@/router';

const HomePage = () => {
  const { t } = useAppTranslation();

  return (
    <PageWrapper>
      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.subTitle')}</p>
      <Link
        to="/react-query"
        className={buttonVariants({ variant: 'outline', className: 'm-4' })}
      >
        {t('HomePage.reactQuery')}
      </Link>
      <Link
        to="/react-hook-form-zod"
        className={buttonVariants({ variant: 'outline', className: 'm-4' })}
      >
        {t('HomePage.reactHookFormZod')}
      </Link>
      <Link
        to="/react-router-generouted"
        className={buttonVariants({ variant: 'outline', className: 'm-4' })}
      >
        {t('HomePage.reactRouterGenerouted')}
      </Link>
      <Link
        to="/kitchen-sink"
        className={buttonVariants({ variant: 'outline', className: 'm-4' })}
      >
        {t('HomePage.kitchenSink')}
      </Link>
    </PageWrapper>
  );
};

export default HomePage;
