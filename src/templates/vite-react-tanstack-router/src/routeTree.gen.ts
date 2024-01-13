import { FileRoute, lazyFn, lazyRouteComponent } from '@tanstack/react-router';

import { Route as rootRoute } from './routes/__root';
import { Route as TanstackRouterRouteImport } from './routes/tanstack-router/route';
import { Route as ReactQueryIdRouteImport } from './routes/react-query/$id/route';

const ReactQueryComponentImport = new FileRoute('/react-query').createRoute();
const ReactHookFormZodComponentImport = new FileRoute(
  '/react-hook-form-zod',
).createRoute();
const KitchenSinkLoaderImport = new FileRoute('/kitchen-sink').createRoute();
const IndexComponentImport = new FileRoute('/').createRoute();

const ReactQueryComponentRoute = ReactQueryComponentImport.update({
  path: '/react-query',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/react-query/component'),
    'component',
  ),
});

const ReactHookFormZodComponentRoute = ReactHookFormZodComponentImport.update({
  path: '/react-hook-form-zod',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/react-hook-form-zod/component'),
    'component',
  ),
});

const KitchenSinkLoaderRoute = KitchenSinkLoaderImport.update({
  path: '/kitchen-sink',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/kitchen-sink/loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/kitchen-sink/component'),
      'component',
    ),
  });

const TanstackRouterRouteRoute = TanstackRouterRouteImport.update({
  path: '/tanstack-router',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/tanstack-router/component'),
    'component',
  ),
});

const IndexComponentRoute = IndexComponentImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index/component'),
    'component',
  ),
});

const ReactQueryIdRouteRoute = ReactQueryIdRouteImport.update({
  path: '/$id',
  getParentRoute: () => ReactQueryComponentRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/react-query/$id/component'),
    'component',
  ),
});
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexComponentImport;
      parentRoute: typeof rootRoute;
    };
    '/tanstack-router': {
      preLoaderRoute: typeof TanstackRouterRouteImport;
      parentRoute: typeof rootRoute;
    };
    '/kitchen-sink': {
      preLoaderRoute: typeof KitchenSinkLoaderImport;
      parentRoute: typeof rootRoute;
    };
    '/react-hook-form-zod': {
      preLoaderRoute: typeof ReactHookFormZodComponentImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query': {
      preLoaderRoute: typeof ReactQueryComponentImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query/$id': {
      preLoaderRoute: typeof ReactQueryIdRouteImport;
      parentRoute: typeof ReactQueryComponentImport;
    };
  }
}
export const routeTree = rootRoute.addChildren([
  IndexComponentRoute,
  TanstackRouterRouteRoute,
  KitchenSinkLoaderRoute,
  ReactHookFormZodComponentRoute,
  ReactQueryComponentRoute.addChildren([ReactQueryIdRouteRoute]),
]);
