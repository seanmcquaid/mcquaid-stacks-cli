import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '../components/Navbar';
import PageError from '../components/PageError';

const App: FC = () => {
  return (
    <ErrorBoundary
      fallback={<PageError errorText="Sorry, something happened" />}
    >
      <Navbar />
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
