import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import PageWrapper from '@/components/app/PageWrapper';

const formSchema = z
  .object({
    username: z.string().email(),
    password: z.string().min(3).max(10),
    confirmPassword: z.string().min(3).max(10),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const ReactHookFormZodPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  });
  return (
    <PageWrapper>
      <form>
        <Input
          className="m-4"
          autoComplete="username"
          label="Username"
          errorMessage={errors?.username?.message}
          {...register('username')}
        />
        <Input
          type="password"
          className="m-4"
          autoComplete="new-password"
          label="Password"
          errorMessage={errors?.password?.message}
          {...register('password')}
        />
        <Input
          type="password"
          className="m-4"
          autoComplete="new-password"
          label="Confirm Password"
          errorMessage={errors?.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </form>
    </PageWrapper>
  );
};

export default ReactHookFormZodPage;
