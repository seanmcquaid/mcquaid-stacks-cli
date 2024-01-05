import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, RootRoute } from '@tanstack/react-router';
import PageError from '@/components/app/PageError';
import { Toaster } from '@/components/ui/Toaster';

const Root = () => (
  <ErrorBoundary
    fallback={<PageError errorText="Sorry, something happened at the root" />}
  >
    <Outlet />
    <Toaster />
  </ErrorBoundary>
);

export const Route = new RootRoute({
  component: Root,
  errorComponent: () => <PageError errorText="Sorry, something happened" />,
});
