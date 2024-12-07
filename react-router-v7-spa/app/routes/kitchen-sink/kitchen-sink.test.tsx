import { createRoutesStub } from 'react-router';
import KitchenSinkPage from '.';
import {
  render,
  screen,
  waitFor,
} from '@/utils/testing/reactTestingLibraryUtils';

describe('Kitchen Sink Page', () => {
  it('Renders loader data', async () => {
    const RoutesStub = createRoutesStub([
      {
        path: '/',
        Component: () => (
          <KitchenSinkPage
            loaderData={[
              { id: 1, title: 'Pos1', userId: 1, body: 'Body 1' },
              { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
            ]}
            actionData={undefined}
          />
        ),
      },
    ]);

    render(<RoutesStub />);

    await waitFor(() => expect(screen.queryByText('Pos1')).toBeInTheDocument());
  });
});
