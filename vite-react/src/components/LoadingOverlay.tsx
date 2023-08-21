import { FC } from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading }) => (
  <div
    className={
      isLoading
        ? 'fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-75 flex flex-col items-center justify-center'
        : 'hidden'
    }
    data-testid="loading-overlay"
  >
    Loading...
  </div>
);

export default LoadingOverlay;
