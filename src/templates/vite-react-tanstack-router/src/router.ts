import { Router } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

export default router;
