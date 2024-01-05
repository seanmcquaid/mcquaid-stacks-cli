import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import useGetPostsQuery, {
  getPostsQuery,
} from '@/services/queries/useGetPostsQuery';
import queryClient from '@/services/queryClient';
import useAppTranslation from '@/hooks/useAppTranslation';
import { toast } from '@/hooks/useToast';
import { FileRoute } from '@tanstack/react-router';

const formSchema = z.object({
  name: z.string().min(3).max(50, {
    message: 'Name must be between 3 and 10 characters',
  }),
});

const KitchenSink = () => {
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

  const handleOnSubmit = handleSubmit(formData => {
    toast({
      title: `Hello ${formData.name}!`,
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
        <Button type="submit" disabled={!isFormValid}>
          {t('KitchenSinkPage.submit')}
        </Button>
      </form>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="flex mt-4 items-center">
            {post.title.substring(0, 4)}
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export const Route = new FileRoute('/kitchen-sink/').createRoute({
  component: KitchenSink,
  loader: async () => {
    const query = getPostsQuery();
    return {
      data:
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query)),
    };
  },
});
