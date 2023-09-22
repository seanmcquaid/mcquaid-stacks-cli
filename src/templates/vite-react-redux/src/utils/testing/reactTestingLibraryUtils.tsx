import type { RenderOptions, RenderResult } from '@testing-library/react';
import {
  render as rtlRender,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import DataMemoryRouter from './DataMemoryRouter';
import createTestStore from './createTestStore';
import type { RootState } from '@/store';
import type { Path } from '@/router';

const renderHook = <T,>(
  fn: () => T,
  renderOptions?: {
    preloadedState?: Partial<RootState>;
  } & RenderOptions,
) => {
  const store = createTestStore(renderOptions?.preloadedState);
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

const render = (
  ui: ReactElement,
  renderOptions?: {
    preloadedState?: Partial<RootState>;
    initialRoute?: Path;
  } & RenderOptions,
): RenderResult => {
  const store = createTestStore(renderOptions?.preloadedState);
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      {renderOptions?.initialRoute ? (
        <DataMemoryRouter initialEntries={[renderOptions.initialRoute]}>
          {children}
        </DataMemoryRouter>
      ) : (
        children
      )}
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
