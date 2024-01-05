import { startTransition, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import env from './env';
import queryClient from './services/queryClient';
import './styles/index.css';
import './i18n';
import PageError from './components/app/PageError';
import router from './router';
import { RouterProvider } from '@tanstack/react-router';

const prepare = async () => {
  if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
    const worker = await import('../mocks/worker');
    return worker.default.start({ onUnhandledRequest: 'bypass' });
  }
  return Promise.resolve();
};

prepare().then(() =>
  startTransition(() => {
    createRoot(document.getElementById('root') as HTMLElement).render(
      <StrictMode>
        <ErrorBoundary fallback={<PageError shouldAllowRefresh />}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ErrorBoundary>
      </StrictMode>,
    );
  }),
);
