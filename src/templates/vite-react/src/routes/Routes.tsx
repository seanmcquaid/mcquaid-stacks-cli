import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import appI18next from '@/i18n/appI18next';
import PageError from '@/components/app/PageError';

const router = createBrowserRouter([
  {
    path: appI18next.t('Routes.home'),
    element: <Root />,
    errorElement: <PageError errorText="Sorry, something happened" />,
    children: [
      {
        path: appI18next.t('Routes.home'),
        lazy: () => import('@/routes/home/route'),
      },
      {
        path: appI18next.t('Routes.kitchenSink'),
        lazy: () => import('@/routes/kitchen-sink/route'),
      },
      {
        path: appI18next.t('Routes.reactQuery'),
        lazy: () => import('@/routes/react-query/route'),
      },
      {
        path: `${appI18next.t('Routes.reactQuery')}/:id`,
        lazy: () => import('@/routes/react-query/[id]/route'),
      },
      {
        path: appI18next.t('Routes.reactHookFormZod'),
        lazy: () => import('@/routes/react-hook-form-zod/route'),
      },
      {
        path: appI18next.t('Routes.reactRouter'),
        lazy: () => import('@/routes/react-router/route'),
      },
      {
        path: appI18next.t('Routes.notFound'),
        lazy: () => import('@/routes/404/route'),
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
