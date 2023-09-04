import type { FC } from 'react';
import { useMemo, useTransition } from 'react';
import { useAsyncValue } from 'react-router-dom';
import type Post from '../../types/Post';
import useGetPostsQuery from '../../services/queries/useGetPostsQuery';
import { useNavigate } from '../../router';

export const filterPostsByText = (text: string, posts: Post[]): Post[] =>
  posts.filter(post => post.title.match(text));

interface PostsListProps {
  filterText: string;
}

interface PostsLoaderData {
  posts: Promise<Post[]>;
}

const PostsList: FC<PostsListProps> = ({ filterText }) => {
  const initialPosts = useAsyncValue() as Awaited<PostsLoaderData['posts']>;
  const { data: posts } = useGetPostsQuery(initialPosts);
  const [, startTransition] = useTransition();
  const navigate = useNavigate();
  const filteredPosts: Post[] = useMemo(
    () => filterPostsByText(filterText, posts ?? []),
    [filterText, posts],
  );

  const handleOnClick = (post: Post): void => {
    startTransition(() => {
      navigate(`/post/:id`, { params: { id: post.id.toString() } });
    });
  };

  return (
    <ul>
      {filteredPosts.map(post => (
        <li key={post.id} data-testid="post">
          <button onClick={() => handleOnClick(post)} data-testid="post-button">
            {post.title.substring(0, 5)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
