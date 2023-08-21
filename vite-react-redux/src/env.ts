import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_ENVIRONMENT: z.enum(['dev', 'qa', 'staging', 'prod']),
  VITE_APP_MSW_ENABLED: z.coerce.boolean().optional(),
  MODE: z.enum(['development', 'test', 'production']),
  VITE_APP_VERSION: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default env;
