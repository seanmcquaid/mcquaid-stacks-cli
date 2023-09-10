import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { RenderResult } from '@testing-library/react';
import {
  render as rtlRender,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import type { ReactElement, PropsWithChildren } from 'react';
import DataMemoryRouter from './DataMemoryRouter';
import type { Path } from '@/router';

const queryClient = new QueryClient();

const renderHook = <T,>(fn: () => T) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

interface RenderOptions {
  initialRoute?: Path;
}

const render = (
  ui: ReactElement,
  renderOptions?: RenderOptions,
): RenderResult => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      {renderOptions?.initialRoute ? (
        <DataMemoryRouter initialEntries={[renderOptions.initialRoute]}>
          {children}
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
