import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LinkButton from '@/components/ui/LinkButton';
import postsService from '@/services/postsService';
import getValidatedFormData from '@/utils/getValidatedFormData';

const formDataSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Password must be between 3 and 10 characters',
    })
    .max(50, {
      message: 'Name must be between 3 and 10 characters',
    }),
});

type FormData = z.infer<typeof formDataSchema>;

const resolver = zodResolver(formDataSchema);

const KitchenSinkPage = async () => {
  const posts = await postsService.getPosts();
  const formData = new FormData();

  formData.append('name', 'Jo');

  const results = getValidatedFormData({
    formData,
    schema: formDataSchema,
  });

  console.log(results);

  return (
    <div>
      {/* <Form method="POST">
        <Input
          className="m-4"
          label="Name"
          errorMessage={errors?.name?.message}
          {...register('name')}
        />
        <Button type="submit">{'Submit'}</Button>
      </Form> */}
      <ul className="grid grid-cols-2">
        {posts?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            <LinkButton href={`/react-query/${post.id}`}>
              {post.title.substring(0, 4)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KitchenSinkPage;
