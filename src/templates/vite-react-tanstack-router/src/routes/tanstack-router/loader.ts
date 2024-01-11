import { FileRouteLoader } from '@tanstack/react-router';

export const loader = FileRouteLoader('/tanstack-router')(() => {
  return {
    hello:
      'Hello friends! This page is using patterns common to TanStack Router',
  };
});
