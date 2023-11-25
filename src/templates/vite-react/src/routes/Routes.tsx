import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Root from './root';
import appI18next from '@/i18n/appI18next';

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
    path: appI18next.t('Routes.home'),
    element: <Root />,
    children: [
      { path: appI18next.t('Routes.home'), element: <HomePage /> },
      {
        path: appI18next.t('Routes.notFound'),
        element: <NotFoundPage />,
      },
      {
        path: appI18next.t('Routes.kitchenSink'),
        element: <KitchenSinkPage />,
      },
      { path: appI18next.t('Routes.reactQuery'), element: <ReactQueryPage /> },
      {
        path: `${appI18next.t('Routes.reactQuery')}/:id`,
        element: <ReactQueryPostPage />,
      },
      {
        path: appI18next.t('Routes.reactHookFormZod'),
        element: <ReactHookFormZodPage />,
      },
      {
        path: appI18next.t('Routes.reactRouter'),
        element: <ReactRouterPage />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
