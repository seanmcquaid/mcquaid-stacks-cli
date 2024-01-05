import type router from '@/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: router;
  }
}
