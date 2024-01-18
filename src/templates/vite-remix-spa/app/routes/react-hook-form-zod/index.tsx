import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import PageWrapper from '@/components/app/PageWrapper';

const formSchema = z
  .object({
    username: z.string().email({
      message: 'Please enter a valid email',
    }),
    password: z.string().min(3).max(10, {
      message: 'Password must be between 3 and 10 characters',
    }),
    confirmPassword: z.string().min(3).max(10, {
      message: 'Password must be between 3 and 10 characters',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const ReactHookFormZod = () => {
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

export default ReactHookFormZod;
