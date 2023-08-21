import { FC } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from '../router';

interface PageErrorProps {
  errorText: string;
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
    <div>
      <h1>ERROR</h1>
      <p>{errorText}</p>
      {shouldAllowRefresh ? (
        <button onClick={handleRefresh}>Refresh</button>
      ) : (
        <button onClick={handleGoBack}>Go Back</button>
      )}
    </div>
  );
};

export default PageError;
