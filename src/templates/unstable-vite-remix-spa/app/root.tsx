/* eslint-disable i18next/no-literal-string */
import './styles/index.css';
import {
  Outlet,
  Links,
  LiveReload,
  Meta,
  Scripts,
  useRouteError,
  isRouteErrorResponse,
  useNavigation,
} from '@remix-run/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Toaster } from './components/ui/Toaster';
import queryClient from './services/queryClient';
import PageError from './components/app/PageError';
import useAppTranslation from './hooks/useAppTranslation';
import LoadingOverlay from './components/ui/LoadingOverlay';

export function ErrorBoundary() {
  const error = useRouteError();
  const { i18n } = useAppTranslation();

  const renderErrorContent = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <PageError
          titleText={error.status.toString()}
          errorText={error.statusText}
        />
      );
    } else if (error instanceof Error) {
      return <PageError titleText={error.name} errorText={error.message} />;
    } else {
      return <PageError errorText="There was an app crash!" />;
    }
  };

  return (
    <html lang={i18n.language}>
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
        <title>unstable-vite-remix</title>
        <Meta />
        <Links />
      </head>
      <body>
        {renderErrorContent()}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html className="h-screen w-full">
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
        <title>unstable-vite-remix</title>
        <Meta />
        <Links />
      </head>
      <body>
        <LoadingOverlay isLoading={isLoading} />
        <Scripts />
        <LiveReload />
        <noscript>
          Your browser does not support JavaScript or it is not enabled! Please
          re-enable JavaScript in order to use this site.
        </noscript>
      </body>
    </html>
  );
}

const Root = () => {
  const { i18n } = useAppTranslation();
  const navigation = useNavigation();
  const isLoadingPage = navigation.state === 'loading';

  return (
    <html lang={i18n.language} className="h-screen w-full">
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
        <title>unstable-vite-remix</title>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-full">
        <LoadingOverlay isLoading={isLoadingPage} />
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
          <Scripts />
          <LiveReload />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Root;
