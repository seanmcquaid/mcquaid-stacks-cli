/* eslint-disable i18next/no-literal-string */
import './styles/index.css';
import { Outlet, Links, LiveReload, Meta, Scripts } from '@remix-run/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/Toaster';
import queryClient from './services/queryClient';
import LoadingOverlay from './components/ui/LoadingOverlay';

export function HydrateFallback() {
  return (
    <html lang="en-US" className="h-screen w-full">
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
        <LoadingOverlay isLoading />
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
  return (
    <html lang="en-US" className="h-screen w-full">
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
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
          <Scripts />
          <LiveReload />
        </QueryClientProvider>
        <noscript>
          Your browser does not support JavaScript or it is not enabled! Please
          re-enable JavaScript in order to use this site.
        </noscript>
      </body>
    </html>
  );
};

export default Root;
