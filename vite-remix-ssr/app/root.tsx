import './styles/index.css';
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  useRouteError,
  useNavigation,
  json,
  useLoaderData,
  ScrollRestoration,
} from '@remix-run/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useChangeLanguage } from 'remix-i18next/react';
import { Toaster } from './components/ui/Toaster';
import queryClient from './services/queries/queryClient';
import PageError from './components/app/PageError';
import useAppTranslation from './hooks/useAppTranslation';
import LoadingOverlay from './components/ui/LoadingOverlay';
import i18next from './i18n/i18next.server';
import setAcceptLanguageHeaders from './i18n/setAcceptLanguageHeaders';

export async function loader({ request }: LoaderFunctionArgs) {
  setAcceptLanguageHeaders(request);
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export function Layout({ children }: PropsWithChildren) {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useAppTranslation();
  const navigation = useNavigation();
  const isLoadingPage = navigation.state === 'loading';

  useChangeLanguage(locale);

  return (
    <html
      lang={locale}
      dir={i18n.dir()}
      className="h-screen min-h-screen overflow-auto w-full"
    >
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
        <main className="flex-1">
          <QueryClientProvider client={queryClient}>
            <LoadingOverlay isLoading={isLoadingPage} />
            {children}
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition="top-right"
            />
            <Toaster />
          </QueryClientProvider>
        </main>
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
  return <Outlet />;
};

export default Root;
