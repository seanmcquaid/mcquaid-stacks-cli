import { useNavigate } from '@remix-run/react';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';

interface PageErrorProps {
  titleText?: string;
  errorText?: string;
}

const PageError = ({ errorText, titleText }: PageErrorProps) => {
  const { t } = useAppTranslation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-full w-full p-8 flex-col">
      <h1>{titleText ? titleText : t('PageError.title')}</h1>
      {!!errorText && <p>{errorText}</p>}
      <Button onClick={handleGoBack}>{t('PageError.goBack')}</Button>
    </div>
  );
};

export default PageError;
