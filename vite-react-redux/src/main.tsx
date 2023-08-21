import { startTransition, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes } from '@generouted/react-router/lazy';
import { QueryClientProvider } from '@tanstack/react-query';
import env from './env';
import queryClient from './services/queryClient';

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
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <QueryClientProvider client={queryClient}>
            <Suspense>
              <Routes />
            </Suspense>
          </QueryClientProvider>
        </ErrorBoundary>
      </StrictMode>,
    );
  }),
);
