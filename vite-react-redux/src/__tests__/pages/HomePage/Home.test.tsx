import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HomePage, { Action, Loader } from '../../../pages/index';
import {
  render,
  waitFor,
  screen,
} from '../../../testUtils/reactTestingLibraryUtils';

describe('Posts', () => {
  beforeEach(() => {
    render(
      <Route path="/" element={<HomePage />} loader={Loader} action={Action} />,
      { initialRoute: '/' },
    );
  });
  it('Updates search text if user types', async () => {
    await waitFor(() => expect(screen.queryAllByTestId('post').length).toBe(1));
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await userEvent.type(screen.getByTestId('text-input'), 'test value');
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
  });
  it('Clears search text if user clicks button', async () => {
    await waitFor(() => expect(screen.queryAllByTestId('post').length).toBe(1));
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await userEvent.type(screen.getByTestId('text-input'), 'test value');
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
    await userEvent.click(screen.getByTestId('search-button'));
    await waitFor(() =>
      expect(screen.getByTestId('text-input')).toHaveValue(''),
    );
  });
});
