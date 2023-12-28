import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from '@/components/app/PageError';
import { Toaster } from '@/components/ui/toaster';

const Root = () => {
  return (
    <ErrorBoundary
      fallback={<PageError errorText="Sorry, something happened" />}
    >
      <Outlet />
      <Toaster/>
    </ErrorBoundary>
  );
};

export default Root;
