import { z } from 'zod';
import { FileRoute } from '@tanstack/react-router';

const searchParamsSchema = z.object({
  modal: z.coerce.boolean().catch(false),
});

export const Route = new FileRoute('/tanstack-router').createRoute({
  validateSearch: searchParamsSchema,
});
