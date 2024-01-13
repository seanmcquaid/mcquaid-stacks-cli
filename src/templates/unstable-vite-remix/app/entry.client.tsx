import { RemixBrowser } from '@remix-run/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import queryClient from './services/queryClient';
import env from './env';
import './i18n';

const prepare = async () => {
  if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
    const worker = await import('../mocks/worker');
    return worker.default.start({ onUnhandledRequest: 'bypass' });
  }
  return Promise.resolve();
};

prepare().then(() =>
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RemixBrowser />
        </QueryClientProvider>
      </StrictMode>,
    );
  }),
);
