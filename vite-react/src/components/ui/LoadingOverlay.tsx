import ClipLoader from 'react-spinners/ClipLoader';

const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => (
  <div
    className={
      isLoading
        ? 'fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-75 flex flex-col items-center justify-center'
        : 'hidden'
    }
    data-testid="loading-overlay"
  >
    <ClipLoader loading={isLoading} size={150} />
  </div>
);

export default LoadingOverlay;
