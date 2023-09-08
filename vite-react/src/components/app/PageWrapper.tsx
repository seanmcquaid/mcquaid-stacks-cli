import type { PropsWithChildren } from 'react';

interface PageWrapperProps extends PropsWithChildren {
  isLoading?: boolean;
  isError?: boolean;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="flex h-full w-full p-8 flex-col">{children}</div>;
};

export default PageWrapper;
