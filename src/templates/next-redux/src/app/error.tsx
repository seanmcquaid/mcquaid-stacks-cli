'use client'; // Error components must be Client Components

import ErrorPage from '@/components/ui/ErrorPage';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = (props: ErrorProps) => <ErrorPage {...props} />;

export default Error;
