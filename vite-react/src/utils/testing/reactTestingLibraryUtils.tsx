import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render as rtlRender,
  RenderResult,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { ReactElement, FC, PropsWithChildren } from 'react';
import DataMemoryRouter from './DataMemoryRouter';

const queryClient = new QueryClient();

const renderHook = <T,>(fn: () => T) => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

interface RenderOptions {
  initialRoute?: string;
}

const render = (
  ui: ReactElement,
  { initialRoute }: RenderOptions = {},
): RenderResult => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {initialRoute ? (
        <DataMemoryRouter initialEntries={[initialRoute]}>
          <>{children}</>
        </DataMemoryRouter>
      ) : (
        children
      )}
    </QueryClientProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
