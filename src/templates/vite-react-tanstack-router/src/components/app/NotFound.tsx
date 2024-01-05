import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/Button';
import PageWrapper from '@/components/app/PageWrapper';
import useAppTranslation from '@/hooks/useAppTranslation';

const NotFound = () => {
  const { t } = useAppTranslation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate({ to: t('Routes.home') });
  };

  return (
    <PageWrapper>
      <h1>{t('NotFoundPage.notFound')}</h1>
      <p>{t('NotFoundPage.pleaseTryADifferentRoute')}</p>
      <Button onClick={handleOnClick}>{t('NotFoundPage.home')}</Button>
    </PageWrapper>
  );
};

export default NotFound;
