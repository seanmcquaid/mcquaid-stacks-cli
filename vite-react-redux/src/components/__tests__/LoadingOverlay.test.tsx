import { render, screen } from '../../testUtils/reactTestingLibraryUtils';
import LoadingOverlay from '../LoadingOverlay';

describe('LoadingOverlay', () => {
  it('Is visible if isLoading', () => {
    render(<LoadingOverlay isLoading />);
    expect(screen.queryByTestId('loading-overlay')).not.toHaveClass('hidden');
  });
  it('Is not visible if is not loading', () => {
    render(<LoadingOverlay isLoading={false} />);
    expect(screen.queryByTestId('loading-overlay')).toHaveClass('hidden');
  });
});
