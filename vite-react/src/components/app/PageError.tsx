import type { FC } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import PageWrapper from './PageWrapper';
import { useNavigate } from '@/router';
import { Button } from '@/components/ui/Button';

interface PageErrorProps {
  errorText?: string;
  shouldAllowRefresh?: boolean;
}

const PageError: FC<PageErrorProps> = ({ errorText, shouldAllowRefresh }) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    resetBoundary();
  };

  return (
    <PageWrapper>
      <h1>ERROR</h1>
      {!!errorText && <p>{errorText}</p>}
      {shouldAllowRefresh ? (
        <Button onClick={handleRefresh}>Refresh</Button>
      ) : (
        <Button onClick={handleGoBack}>Go Back</Button>
      )}
    </PageWrapper>
  );
};

export default PageError;
