import { zodResolver } from '@hookform/resolvers/zod';
import { getValidatedFormData, useRemixForm } from 'remix-hook-form';
import type {
  ClientActionFunctionArgs,
  ClientLoaderFunctionArgs,
} from '@remix-run/react';
import { Form, useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import queryClient from '@/services/queryClient';
import { toast } from '@/hooks/useToast';
import postsService from '@/services/postsService';
import type Post from '@/types/Post';
import QueryKey from '@/constants/QueryKey';
import LinkButton from '@/components/ui/LinkButton';

const formDataSchema = z.object({
  name: z.string().min(3).max(50, {
    message: 'Name must be between 3 and 10 characters',
  }),
});

type FormData = z.infer<typeof formDataSchema>;

const resolver = zodResolver(formDataSchema);

export const loader = async () => {
  const posts = await postsService.getPosts();

  return posts;
};

export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  const posts = await queryClient.ensureQueryData({
    queryKey: [QueryKey.GET_POSTS],
    queryFn: () => serverLoader<Post[]>(),
  });

  return posts;
};

clientLoader.hydrate = true;

export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<FormData>(request, resolver);
  if (errors) {
    // The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
    return json({ errors, defaultValues });
  }

  // Do something with the data
  return json(data);
};

export const clientAction = async ({
  serverAction,
}: ClientActionFunctionArgs) => {
  await serverAction();

  toast({
    title: `Hello ${name}!`,
  });

  return null;
};

const KitchenSinkPage = () => {
  const data = useLoaderData<typeof clientLoader>();
  const {
    register,
    formState: { errors },
  } = useRemixForm<FormData>({
    resolver,
    mode: 'onChange',
  });

  return (
    <div>
      <Form method="POST">
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message}
          {...register('name')}
        />
        <Button type="submit">{'Submit'}</Button>
      </Form>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            <LinkButton to={`/react-query/${post.id}`}>
              {post.title.substring(0, 4)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KitchenSinkPage;
