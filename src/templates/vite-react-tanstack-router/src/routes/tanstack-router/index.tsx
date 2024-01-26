import { z } from 'zod';
import { createFileRoute } from '@tanstack/react-router';

const searchParamsSchema = z.object({
  modal: z.coerce.boolean().catch(false),
});

export const Route = createFileRoute('/tanstack-router/')({
  validateSearch: searchParamsSchema,
  loader: async () => {
    return {
      hello:
        'Hello friends! This page is using patterns common to TanStack Router',
    };
  },
});
