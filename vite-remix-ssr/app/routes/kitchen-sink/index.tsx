import { zodResolver } from '@hookform/resolvers/zod';
import type {
  ClientActionFunctionArgs,
  ClientLoaderFunctionArgs,
} from '@remix-run/react';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import type { ActionFunctionArgs } from '@remix-run/node';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import queryClient from '@/services/queryClient';
import { toast } from '@/hooks/useToast';
import postsService from '@/services/postsService';
import type Post from '@/types/Post';
import QueryKey from '@/constants/QueryKey';
import LinkButton from '@/components/ui/LinkButton';
import getValidatedFormData from '@/utils/getValidatedFormData';
import { useForm } from 'react-hook-form';

const formDataSchema = z.object({
  name: z.string().min(3).max(10, {
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
  const { errors, data } = getValidatedFormData({
    schema: formDataSchema,
    formData: await request.formData(),
  });

  if (errors) {
    return { errors };
  }

  return { data };
};

export const clientAction = async ({
  serverAction,
}: ClientActionFunctionArgs) => {
  const { data, errors } = (await serverAction<typeof action>()) as Awaited<
    ReturnType<typeof action>
  >;

  if (errors) {
    return { errors };
  }

  toast({
    title: `Hello ${data?.name}!`,
  });

  return { data };
};

const KitchenSinkPage = () => {
  const loaderData = useLoaderData<typeof clientLoader>();
  const actionData = useActionData<typeof clientAction>();
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver,
    mode: 'onChange',
    defaultValues: {
      name: actionData?.data?.name,
    },
  });

  return (
    <div>
      <Form method="POST">
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message || actionData?.errors?.name}
          {...register('name')}
        />
        <Button type="submit">{'Submit'}</Button>
      </Form>
      <ul className="grid grid-cols-2">
        {loaderData?.map(post => (
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
