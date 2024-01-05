import { Route as rootRoute } from "./routes/__root"
import { Route as IndexRoute } from "./routes/index"
import { Route as ReactHookFormZodIndexRoute } from "./routes/react-hook-form-zod/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/react-hook-form-zod/": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(ReactHookFormZodIndexRoute.options, {
  path: "/react-hook-form-zod/",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ReactHookFormZodIndexRoute,
])
