import type { FC } from 'react';
import { useAsyncValue } from 'react-router-dom';
import useGetPostQuery from '../../../../services/queries/useGetPostQuery';
import { useParams } from '../../../../router';
import type Post from '../../../../types/Post';

const PostInfo: FC = () => {
  const { id } = useParams('/post/:id');
  const initialPostInfo = useAsyncValue() as Awaited<Promise<Post>>;
  const { data } = useGetPostQuery(id, initialPostInfo);

  return (
    <div data-testid="post-info">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default PostInfo;
