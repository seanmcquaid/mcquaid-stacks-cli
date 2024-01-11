import { FileRoute, lazyFn, lazyRouteComponent } from '@tanstack/react-router'

import { Route as rootRoute } from './routes/__root'
import { Route as TanstackRouterRouteImport } from './routes/tanstack-router/route'
import { Route as ReactQueryRouteImport } from './routes/react-query/route'
import { Route as IndexImport } from './routes/index'
import { Route as ReactQueryIdRouteImport } from './routes/react-query/$id/route'

const ReactHookFormZodComponentImport = new FileRoute(
  '/react-hook-form-zod',
).createRoute()
const KitchenSinkComponentImport = new FileRoute('/kitchen-sink').createRoute()

const ReactHookFormZodComponentRoute = ReactHookFormZodComponentImport.update({
  path: '/react-hook-form-zod',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/react-hook-form-zod/component'),
    'component',
  ),
})

const KitchenSinkComponentRoute = KitchenSinkComponentImport.update({
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
  })

const TanstackRouterRouteRoute = TanstackRouterRouteImport.update({
  path: '/tanstack-router',
  getParentRoute: () => rootRoute,
} as any)
  .updateLoader({
    loader: lazyFn(() => import('./routes/tanstack-router/loader'), 'loader'),
  })
  .update({
    component: lazyRouteComponent(
      () => import('./routes/tanstack-router/component'),
      'component',
    ),
  })

const ReactQueryRouteRoute = ReactQueryRouteImport.update({
  path: '/react-query',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReactQueryIdRouteRoute = ReactQueryIdRouteImport.update({
  path: '/$id',
  getParentRoute: () => ReactQueryRouteRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/react-query': {
      preLoaderRoute: typeof ReactQueryRouteImport
      parentRoute: typeof rootRoute
    }
    '/tanstack-router': {
      preLoaderRoute: typeof TanstackRouterRouteImport
      parentRoute: typeof rootRoute
    }
    '/kitchen-sink': {
      preLoaderRoute: typeof KitchenSinkComponentImport
      parentRoute: typeof rootRoute
    }
    '/react-hook-form-zod': {
      preLoaderRoute: typeof ReactHookFormZodComponentImport
      parentRoute: typeof rootRoute
    }
    '/react-query/$id': {
      preLoaderRoute: typeof ReactQueryIdRouteImport
      parentRoute: typeof ReactQueryRouteImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ReactQueryRouteRoute.addChildren([ReactQueryIdRouteRoute]),
  TanstackRouterRouteRoute,
  KitchenSinkComponentRoute,
  ReactHookFormZodComponentRoute,
])
