import { z } from 'zod';

export const createSlideBodySchema = z.object({
  title: z.string(),
  sortOrder: z.number(),
  bulletPoints: z.array(z.string()),
  notes: z.array(z.string()),
});

type CreateSlideBody = z.infer<typeof createSlideBodySchema>;

export default CreateSlideBody;
