import type { PropsWithChildren } from 'react';
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

interface DataMemoryRouterProps extends PropsWithChildren {
  initialEntries?: string[];
}

const DataMemoryRouter = ({
  children,
  initialEntries,
}: DataMemoryRouterProps) => {
  const router = createMemoryRouter(createRoutesFromElements(children), {
    initialEntries,
  });
  return <RouterProvider router={router} />;
};

export default DataMemoryRouter;
