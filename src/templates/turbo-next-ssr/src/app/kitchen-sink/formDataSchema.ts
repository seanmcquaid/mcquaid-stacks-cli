import { z } from 'zod';

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

export default formDataSchema;
