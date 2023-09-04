import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from '../components/app/PageError';

const App: FC = () => {
  return (
    <ErrorBoundary
      fallback={<PageError errorText="Sorry, something happened" />}
    >
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
