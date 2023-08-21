import { FC, Suspense } from 'react';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import PageError from '../../../components/PageError';
import getPostQuery from '../../../queries/getPostQuery';
import queryClient from '../../../services/queryClient';
import PostInfo from '../_components/PostInfo';
import Post from '../../../types/responses/Post';

export const Loader: LoaderFunction = ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const query = getPostQuery(id);

  return defer({
    postInfo:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export const Catch: FC = () => {
  return <PageError errorText={'Error loading posts'} />;
};

const PostDetailsPage: FC = () => {
  const { postInfo } = useLoaderData() as { postInfo: Promise<Post> };

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={'loading'}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo />
        </Await>
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;
