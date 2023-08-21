import { FC, ReactNode } from 'react';
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

interface DataMemoryRouterProps {
  children: ReactNode;
  initialEntries?: string[];
}

const DataMemoryRouter: FC<DataMemoryRouterProps> = ({
  children,
  initialEntries,
}) => {
  const router = createMemoryRouter(createRoutesFromElements(children), {
    initialEntries,
  });
  return <RouterProvider router={router} />;
};

export default DataMemoryRouter;
