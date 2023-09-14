import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import PageError from '@/components/app/PageError';

const App = () => {
  return (
    <ErrorBoundary
      fallback={<PageError errorText="Sorry, something happened" />}
    >
      <Outlet />
      <Toaster position="bottom-center" />
    </ErrorBoundary>
  );
};

export default App;
