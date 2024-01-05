import { NotFoundRoute, Router } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import NotFound from './components/app/NotFound';
import { Route as rootRoute } from './routes/__root';

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  notFoundRoute: new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: () => <NotFound />,
  }),
});

export default router;
