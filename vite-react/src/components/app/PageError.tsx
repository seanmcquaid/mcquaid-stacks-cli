import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from '@/router';
import { Button } from '@/components/ui/Button';

interface PageErrorProps {
  errorText?: string;
  shouldAllowRefresh?: boolean;
}

const PageError = ({ errorText, shouldAllowRefresh }: PageErrorProps) => {
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
      <h1>ERROR</h1>
      {!!errorText && <p>{errorText}</p>}
      {shouldAllowRefresh ? (
        <Button onClick={handleRefresh}>Refresh</Button>
      ) : (
        <Button onClick={handleGoBack}>Go Back</Button>
      )}
    </div>
  );
};

export default PageError;
