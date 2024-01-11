import { Route as rootRoute } from './routes/__root'
import { Route as TanstackRouterRouteImport } from './routes/tanstack-router/route'
import { Route as ReactQueryRouteImport } from './routes/react-query/route'
import { Route as ReactHookFormZodRouteImport } from './routes/react-hook-form-zod/route'
import { Route as KitchenSinkRouteImport } from './routes/kitchen-sink/route'
import { Route as IndexImport } from './routes/index'
import { Route as ReactQueryIdRouteImport } from './routes/react-query/$id/route'

const TanstackRouterRouteRoute = TanstackRouterRouteImport.update({
  path: '/tanstack-router',
  getParentRoute: () => rootRoute,
} as any)

const ReactQueryRouteRoute = ReactQueryRouteImport.update({
  path: '/react-query',
  getParentRoute: () => rootRoute,
} as any)

const ReactHookFormZodRouteRoute = ReactHookFormZodRouteImport.update({
  path: '/react-hook-form-zod',
  getParentRoute: () => rootRoute,
} as any)

const KitchenSinkRouteRoute = KitchenSinkRouteImport.update({
  path: '/kitchen-sink',
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
    '/kitchen-sink': {
      preLoaderRoute: typeof KitchenSinkRouteImport
      parentRoute: typeof rootRoute
    }
    '/react-hook-form-zod': {
      preLoaderRoute: typeof ReactHookFormZodRouteImport
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
    '/react-query/$id': {
      preLoaderRoute: typeof ReactQueryIdRouteImport
      parentRoute: typeof ReactQueryRouteImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  KitchenSinkRouteRoute,
  ReactHookFormZodRouteRoute,
  ReactQueryRouteRoute.addChildren([ReactQueryIdRouteRoute]),
  TanstackRouterRouteRoute,
])
