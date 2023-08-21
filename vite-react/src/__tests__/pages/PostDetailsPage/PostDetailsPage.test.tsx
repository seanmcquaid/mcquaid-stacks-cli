import { Route } from 'react-router-dom';
import { rest } from 'msw';
import PostDetailsPage, { Loader } from '../../../pages/post/[id]/index';
import {
  render,
  waitFor,
  screen,
} from '../../../testUtils/reactTestingLibraryUtils';
import server from '../../../../mocks/server';

describe('PostDetails', () => {
  it('displays post info if it comes back from the API', async () => {
    render(
      <Route path="/post/:id" element={<PostDetailsPage />} loader={Loader} />,
      { initialRoute: '/post/1' },
    );
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).toBeInTheDocument(),
    );
  });
  it('does not display post info if no data comes back from the API', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        (_, res, context) => {
          return res(context.status(500));
        },
      ),
    );
    render(
      <Route path="/post/:id" element={<PostDetailsPage />} loader={Loader} />,
      { initialRoute: '/post/1' },
    );
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).not.toBeInTheDocument(),
    );
  });
});
