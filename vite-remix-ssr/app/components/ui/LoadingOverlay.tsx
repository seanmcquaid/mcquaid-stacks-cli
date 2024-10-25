import type { ComponentPropsWithoutRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps extends ComponentPropsWithoutRef<'div'> {
  isLoading: boolean;
}

const LoadingOverlay = ({ isLoading, ...props }: LoadingOverlayProps) => (
  <div
    className={
      isLoading
        ? 'fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-75 flex flex-col items-center justify-center'
        : 'hidden'
    }
    {...props}
    data-testid="loading-overlay"
  >
    <LoadingSpinner />
  </div>
);

export default LoadingOverlay;
