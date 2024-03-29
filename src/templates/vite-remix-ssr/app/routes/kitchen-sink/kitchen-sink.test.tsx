import { createRemixStub } from '@remix-run/testing';
import KitchenSinkPage from '.';
import type Post from '@/types/Post';
import {
  render,
  screen,
  waitFor,
} from '@/utils/testing/reactTestingLibraryUtils';

describe('Kitchen Sink Page', () => {
  it('Renders loader data', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        loader: () => {
          return [
            { id: 1, title: 'Pos1', userId: 1, body: 'Body 1' },
            { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
          ] satisfies Post[];
        },
        Component: KitchenSinkPage,
      },
    ]);

    render(<RemixStub />);

    await waitFor(() => expect(screen.queryByText('Pos1')).toBeInTheDocument());
  });
});
