import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';

interface PageErrorProps {
  titleText?: string;
  errorText?: string;
  shouldAllowRefresh?: boolean;
}

const PageError = ({
  errorText,
  shouldAllowRefresh,
  titleText,
}: PageErrorProps) => {
  const { t } = useAppTranslation();
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    resetBoundary();
  };

  return (
    <div className="flex h-full w-full p-8 flex-col">
      <h1>{titleText ? titleText : t('PageError.title')}</h1>
      {!!errorText && <p>{errorText}</p>}
      {shouldAllowRefresh ? (
        <Button onClick={handleRefresh}>{t('PageError.refresh')}</Button>
      ) : (
        <Button onClick={handleGoBack}>{t('PageError.goBack')}</Button>
      )}
    </div>
  );
};

export default PageError;
