import { zodResolver } from '@hookform/resolvers/zod';
import type { ClientActionFunctionArgs } from 'react-router';
import { Form, useActionData, useLoaderData } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import queryClient from '@/services/queryClient';
import { toast } from '@/hooks/useToast';
import LinkButton from '@/components/ui/LinkButton';
import { getPostsQuery } from '@/services/queries/useGetPostsQuery';
import getValidatedFormData from '@/utils/getValidatedFormData';

const formDataSchema = z.object({
  name: z.string().min(3).max(50, {
    message: 'Name must be between 3 and 10 characters',
  }),
});

type FormData = z.infer<typeof formDataSchema>;

const resolver = zodResolver(formDataSchema);

export const clientLoader = async () => {
  const posts = await queryClient.ensureQueryData(getPostsQuery());

  return posts;
};

clientLoader.hydrate = true;

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
  const { errors, data } = getValidatedFormData({
    schema: formDataSchema,
    formData: await request.formData(),
  });

  if (errors) {
    return { errors };
  }

  toast({
    title: `Hello ${name}!`,
  });

  return { data };
};

const KitchenSinkPage = () => {
  const data = useLoaderData<typeof clientLoader>();
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver,
    mode: 'onChange',
  });
  const actionData = useActionData<typeof clientAction>();

  return (
    <div>
      <Form method="POST">
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message || actionData?.errors?.name}
          defaultValue={actionData?.data?.name}
          {...register('name')}
        />
        <Button type="submit">{'Submit'}</Button>
      </Form>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="mt-4 flex items-center">
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
