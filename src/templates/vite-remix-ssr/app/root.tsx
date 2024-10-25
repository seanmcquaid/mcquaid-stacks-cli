import './styles/index.css';
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  useRouteError,
  useNavigation,
  ScrollRestoration,
} from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { Toaster } from './components/ui/Toaster';
import queryClient from './services/queryClient';
import PageError from './components/app/PageError';
import LoadingOverlay from './components/ui/LoadingOverlay';
import type * as Route from './+types.root';

export function Layout({ children }: PropsWithChildren & Route.ComponentProps) {
  return (
    <html className="h-screen min-h-screen overflow-auto w-full">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Vite App" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen min-h-screen flex flex-col overflow-auto w-full">
        <main className="flex-1">{children}</main>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    // Log to service of some sort
    console.error(error);
  }, [error]);

  return <PageError errorText="There was an app crash!" />;
}

export function HydrateFallback() {
  return <LoadingOverlay isLoading />;
}

const Root = () => {
  const navigation = useNavigation();
  const isLoadingPage = navigation.state === 'loading';

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingOverlay isLoading={isLoadingPage} />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
      <Toaster />
    </QueryClientProvider>
  );
};

export default Root;
