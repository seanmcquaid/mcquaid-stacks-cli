import { FC, Suspense, useEffect, useMemo } from 'react';
import {
  ActionFunction,
  Await,
  LoaderFunction,
  defer,
  json,
  redirect,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import queryClient from '../services/queryClient';
import getPostQuery from '../queries/getPostQuery';
import PageError from '../components/PageError';
import getPostsQuery from '../queries/getPostsQuery';
import PostsList from '../components/PostsList';
import Post from '../types/responses/Post';

interface PostsLoaderData {
  posts: Promise<Post[]>;
}

const formSchema = z.object({
  postId: z
    .string()
    .min(1, 'Text must contain at least 1 characters')
    .max(3, 'Text must contain at most 3 characters'),
});

export const Action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const postId = formData.get('postId');
    if (!postId) {
      return null;
    }
    const validatedForm = formSchema.safeParse({ postId });

    if (!validatedForm.success) {
      return null;
    }

    // Make request to backend directly here instead of using React Query's mutation directly
    await queryClient.invalidateQueries({
      queryKey: ['getPost', validatedForm.data.postId],
    });
    await queryClient.fetchQuery(getPostQuery(validatedForm.data.postId));
    return redirect(`/post/${validatedForm.data.postId}`);
  } catch (err) {
    return json({ err });
  }
};

export const Loader: LoaderFunction = () => {
  const query = getPostsQuery();
  return defer({
    posts:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export const Catch: FC = () => {
  return <PageError errorText={'Error loading posts'} />;
};

const HomePage: FC = () => {
  const { register, watch, reset, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postId: '',
    },
    mode: 'all',
  });
  const fetcher = useFetcher();
  const { posts } = useLoaderData() as PostsLoaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = watch('postId');
  const postIdSearchParam = useMemo(
    () => searchParams.get('postId'),
    [searchParams],
  );

  useEffect(() => {
    setSearchParams(params => {
      params.set('postId', postId);
      return params;
    });
  }, [setSearchParams, postId]);

  useEffect(() => {
    setValue('postId', postIdSearchParam ?? '');
  }, [postIdSearchParam, setValue]);

  useEffect(() => {
    if (fetcher.state === 'submitting') {
      reset();
    }
  }, [fetcher.state, reset]);

  return (
    <div>
      <h1>Posts</h1>
      <fetcher.Form method="post">
        <input
          data-testid="text-input"
          {...register('postId')}
          disabled={fetcher.state !== 'idle'}
        />
        <button
          disabled={fetcher.state !== 'idle'}
          type="submit"
          data-testid="search-button"
        >
          {fetcher.state !== 'idle' ? 'LOADING' : 'Search'}
        </button>
      </fetcher.Form>
      <Suspense fallback={'loading'}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList
            filterText={searchParams.get('postId') ?? watch('postId')}
          />
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
