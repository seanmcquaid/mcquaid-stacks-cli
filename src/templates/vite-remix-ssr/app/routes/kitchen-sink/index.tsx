import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type {
  ClientActionFunctionArgs,
  ClientLoaderFunctionArgs,
} from '@remix-run/react';
import { useFetcher, useNavigate } from '@remix-run/react';
import { z } from 'zod';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import useGetPostsQuery from '@/services/queries/useGetPostsQuery';
import queryClient from '@/services/queryClient';
import useAppTranslation from '@/hooks/useAppTranslation';
import { toast } from '@/hooks/useToast';
import postsService from '@/services/postsService';
import type Post from '@/types/Post';
import QueryKey from '@/constants/QueryKey';

export const loader = async () => {
  const posts = await postsService.getPosts();

  return posts;
};

export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  const posts = queryClient.getQueryData<Post[]>([QueryKey.GET_POSTS]);

  if (posts) {
    return { posts };
  }

  return {
    posts: await queryClient.fetchQuery({
      queryKey: [QueryKey.GET_POSTS],
      queryFn: () => serverLoader<Post[]>(),
    }),
  };
};

clientLoader.hydrate = true;

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get('name');

  toast({
    title: `Hello ${name}!`,
  });

  return null;
};

const formSchema = z.object({
  name: z.string().min(3).max(50, {
    message: 'Name must be between 3 and 10 characters',
  }),
});

const KitchenSinkPage = () => {
  const { t } = useAppTranslation();
  const { data, ...rest } = useGetPostsQuery();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  const isFormValid = isValid && isDirty;
  const fetcher = useFetcher();
  const isFetcherLoading = fetcher.state !== 'idle';
  const navigate = useNavigate();

  const handleOnSubmit = handleSubmit(formData => {
    fetcher.submit(formData, {
      method: 'POST',
    });
    reset();
  });

  return (
    <PageWrapper {...rest}>
      <form onSubmit={handleOnSubmit}>
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message}
          {...register('name')}
        />
        <Button type="submit" disabled={!isFormValid || isFetcherLoading}>
          {t('KitchenSinkPage.submit')}
        </Button>
      </form>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            <button onClick={() => navigate(`/react-query/${post.id}`)}>
              {post.title.substring(0, 4)}
            </button>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default KitchenSinkPage;
