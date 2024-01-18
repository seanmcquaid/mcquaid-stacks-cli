import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { RenderResult } from '@testing-library/react';
import {
  render as rtlRender,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import type { ReactElement, PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const renderHook = <T,>(fn: () => T) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

const render = (ui: ReactElement): RenderResult => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
