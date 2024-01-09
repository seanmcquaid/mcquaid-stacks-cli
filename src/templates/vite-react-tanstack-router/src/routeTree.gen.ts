/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';
import { Route as TanstackRouterIndexImport } from './routes/tanstack-router/index';
import { Route as ReactQueryIndexImport } from './routes/react-query/index';
import { Route as ReactHookFormZodIndexImport } from './routes/react-hook-form-zod/index';
import { Route as KitchenSinkIndexImport } from './routes/kitchen-sink/index';
import { Route as ReactQueryIdIndexImport } from './routes/react-query/$id/index';

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const TanstackRouterIndexRoute = TanstackRouterIndexImport.update({
  path: '/tanstack-router/',
  getParentRoute: () => rootRoute,
} as any);

const ReactQueryIndexRoute = ReactQueryIndexImport.update({
  path: '/react-query/',
  getParentRoute: () => rootRoute,
} as any);

const ReactHookFormZodIndexRoute = ReactHookFormZodIndexImport.update({
  path: '/react-hook-form-zod/',
  getParentRoute: () => rootRoute,
} as any);

const KitchenSinkIndexRoute = KitchenSinkIndexImport.update({
  path: '/kitchen-sink/',
  getParentRoute: () => rootRoute,
} as any);

const ReactQueryIdIndexRoute = ReactQueryIdIndexImport.update({
  path: '/react-query/$id/',
  getParentRoute: () => rootRoute,
} as any);
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/kitchen-sink/': {
      preLoaderRoute: typeof KitchenSinkIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-hook-form-zod/': {
      preLoaderRoute: typeof ReactHookFormZodIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query/': {
      preLoaderRoute: typeof ReactQueryIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/tanstack-router/': {
      preLoaderRoute: typeof TanstackRouterIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query/$id/': {
      preLoaderRoute: typeof ReactQueryIdIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  KitchenSinkIndexRoute,
  ReactHookFormZodIndexRoute,
  ReactQueryIndexRoute,
  TanstackRouterIndexRoute,
  ReactQueryIdIndexRoute,
]);
