import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, RootRoute } from '@tanstack/react-router';
import PageError from '@/components/app/PageError';
import { Toaster } from '@/components/ui/Toaster';
import { Suspense, lazy } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then(res => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

const Root = () => (
  <ErrorBoundary
    fallback={<PageError errorText="Sorry, something happened at the root" />}
  >
    <Outlet />
    <Toaster />
    <Suspense>
      <TanStackRouterDevtools initialIsOpen={false} />
    </Suspense>
  </ErrorBoundary>
);

export const Route = new RootRoute({
  component: Root,
  errorComponent: () => <PageError errorText="Sorry, something happened" />,
});
