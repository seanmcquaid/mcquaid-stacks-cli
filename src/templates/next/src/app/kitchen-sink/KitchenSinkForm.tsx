'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { useFormState } from 'react-dom';
import formDataSchema from './formDataSchema';
import { submitName } from './actions';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const KitchenSinkForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formDataSchema>>({
    resolver: zodResolver(formDataSchema),
  });
  const [formState, formAction] = useFormState(submitName, {
    name: '',
  });

  return (
    <form action={formAction}>
      <Input
        className="m-4"
        label="Name"
        errorMessage={errors?.name?.message || formState?.name}
        {...register('name')}
      />
      <Button type="submit">{'Submit'}</Button>
    </form>
  );
};

export default KitchenSinkForm;
