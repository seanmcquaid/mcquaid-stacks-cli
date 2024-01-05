import { Route as rootRoute } from './routes/__root';
import { Route as IndexRoute } from './routes/index';
import { Route as TanstackRouterIndexRoute } from './routes/tanstack-router/index';
import { Route as ReactQueryIndexRoute } from './routes/react-query/index';
import { Route as ReactHookFormZodIndexRoute } from './routes/react-hook-form-zod/index';
import { Route as KitchenSinkIndexRoute } from './routes/kitchen-sink/index';
import { Route as ReactQueryIdIndexRoute } from './routes/react-query/$id/index';

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute;
    };
    '/kitchen-sink/': {
      parentRoute: typeof rootRoute;
    };
    '/react-hook-form-zod/': {
      parentRoute: typeof rootRoute;
    };
    '/react-query/': {
      parentRoute: typeof rootRoute;
    };
    '/tanstack-router/': {
      parentRoute: typeof rootRoute;
    };
    '/react-query/$id/': {
      parentRoute: typeof rootRoute;
    };
  }
}

Object.assign(IndexRoute.options, {
  path: '/',
  getParentRoute: () => rootRoute,
});

Object.assign(KitchenSinkIndexRoute.options, {
  path: '/kitchen-sink/',
  getParentRoute: () => rootRoute,
});

Object.assign(ReactHookFormZodIndexRoute.options, {
  path: '/react-hook-form-zod/',
  getParentRoute: () => rootRoute,
});

Object.assign(ReactQueryIndexRoute.options, {
  path: '/react-query/',
  getParentRoute: () => rootRoute,
});

Object.assign(TanstackRouterIndexRoute.options, {
  path: '/tanstack-router/',
  getParentRoute: () => rootRoute,
});

Object.assign(ReactQueryIdIndexRoute.options, {
  path: '/react-query/$id/',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  KitchenSinkIndexRoute,
  ReactHookFormZodIndexRoute,
  ReactQueryIndexRoute,
  TanstackRouterIndexRoute,
  ReactQueryIdIndexRoute,
]);
