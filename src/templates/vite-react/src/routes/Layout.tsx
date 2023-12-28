import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from '@/components/app/PageError';
import { Toaster } from '@/components/ui/Toaster';

const Layout = () => {
  return (
    <ErrorBoundary
      fallback={<PageError errorText="Sorry, something happened at the root" />}
    >
      <Outlet />
      <Toaster />
    </ErrorBoundary>
  );
};

export default Layout;
