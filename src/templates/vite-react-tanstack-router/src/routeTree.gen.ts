import { Route as rootRoute } from "./routes/__root"
import { Route as IndexRoute } from "./routes/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([IndexRoute])
