import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Root from './root';

const HomePage = lazy(() => import('@/routes/home/route'));
const NotFoundPage = lazy(() => import('@/routes/404/route'));
const KitchenSinkPage = lazy(() => import('@/routes/kitchen-sink/route'));
const ReactQueryPage = lazy(() => import('@/routes/react-query/route'));
const ReactQueryPostPage = lazy(
  () => import('@/routes/react-query/[id]/route'),
);
const ReactHookFormZodPage = lazy(
  () => import('@/routes/react-hook-form-zod/route'),
);
const ReactRouterPage = lazy(() => import('@/routes/react-router/route'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      { path: '/kitchen-sink', element: <KitchenSinkPage /> },
      { path: '/react-query', element: <ReactQueryPage /> },
      { path: '/react-query/:id', element: <ReactQueryPostPage /> },
      { path: '/react-hook-form-zod', element: <ReactHookFormZodPage /> },
      {
        path: '/react-router',
        element: <ReactRouterPage />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
