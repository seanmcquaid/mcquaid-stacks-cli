import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  render,
  waitFor,
  screen,
} from '../../testUtils/reactTestingLibraryUtils';
import PostsList, { filterPostsByText } from '../PostsList';

describe('PostsList', () => {
  describe('filterPostsByText', () => {
    it('filters out posts that do not match text', () => {
      expect(
        filterPostsByText('no match', [
          { title: 'I am here', id: 1, body: 'Body', userId: 1 },
        ]),
      ).toHaveLength(0);
    });
  });
  it('Displays filtered posts', async () => {
    render(
      <>
        <Route path="/" element={<PostsList filterText={'example'} />} />
        <Route path="/post/:id" element={<div data-testid="post-details" />} />
      </>,
      {
        initialRoute: '/',
      },
    );
    await waitFor(() => expect(screen.queryAllByTestId('post').length).toBe(1));
  });

  it('Takes the user to the post details page if they click on the post', async () => {
    render(
      <>
        <Route path="/" element={<PostsList filterText={''} />} />
        <Route path="/post/:id" element={<div data-testid="post-details" />} />
      </>,
      {
        initialRoute: '/',
      },
    );
    await userEvent.click(screen.getByTestId('post-button'));
    await waitFor(() =>
      expect(screen.queryByTestId('post-details')).toBeInTheDocument(),
    );
  });
});
