import { z } from 'zod';

export const createTalkBodySchema = z.object({
  talkLength: z.number(),
  abstract: z.string(),
  topic: z.string(),
  category: z.string(),
});

type CreateTalkBody = z.infer<typeof createTalkBodySchema>;

export default CreateTalkBody;
