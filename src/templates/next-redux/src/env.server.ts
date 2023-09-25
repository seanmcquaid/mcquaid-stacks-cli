import { z } from 'zod';

const serverEnvSchema = z.object({
  CLERK_SECRET_KEY: z.string(),
  DATABASE_URL: z.string(),
  OPEN_AI_API_KEY: z.string(),
});

const serverEnv = serverEnvSchema.parse(process.env);

export default serverEnv;
