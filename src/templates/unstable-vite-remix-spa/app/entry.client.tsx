import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import env from './env';
import './i18n';

const prepareMsw = async () => {
  if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
    const worker = await import('../mocks/worker');
    worker.default.start({ onUnhandledRequest: 'bypass' });
  }

  return Promise.resolve();
};

prepareMsw().then(() =>
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    );
  }),
);
