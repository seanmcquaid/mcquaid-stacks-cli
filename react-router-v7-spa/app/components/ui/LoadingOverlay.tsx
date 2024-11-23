import type { ComponentPropsWithoutRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps extends ComponentPropsWithoutRef<'div'> {
  isLoading: boolean;
}

const LoadingOverlay = ({ isLoading, ...props }: LoadingOverlayProps) => (
  <div
    className={
      isLoading
        ? 'fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white opacity-75'
        : 'hidden'
    }
    {...props}
    data-testid="loading-overlay"
  >
    <LoadingSpinner />
  </div>
);

export default LoadingOverlay;
