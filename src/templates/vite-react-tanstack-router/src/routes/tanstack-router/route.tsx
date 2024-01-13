import { z } from 'zod';
import { FileRoute } from '@tanstack/react-router';

const searchParamsSchema = z.object({
  modal: z.coerce.boolean().catch(false),
});

export const Route = new FileRoute('/tanstack-router').createRoute({
  validateSearch: searchParamsSchema,
  loader: async () => {
    return {
      hello:
        'Hello friends! This page is using patterns common to TanStack Router',
    };
  },
});
