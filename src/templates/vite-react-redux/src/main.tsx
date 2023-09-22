import { lazy, startTransition, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes } from '@generouted/react-router/lazy';
import env from './env';
import './styles/index.css';
import './i18n';
import PageError from './components/app/PageError';
import LoadingOverlay from './components/ui/LoadingOverlay';

const ReduxProvider = lazy(() => import('./store/ReduxProvider'));

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
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <ReduxProvider>
              <Routes />
            </ReduxProvider>
          </Suspense>
        </ErrorBoundary>
      </StrictMode>,
    );
  }),
);
