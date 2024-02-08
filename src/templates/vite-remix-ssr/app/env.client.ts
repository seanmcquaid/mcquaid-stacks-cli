import { z } from 'zod';
import sharedEnvSchema from './sharedEnvSchema';

const envSchema = sharedEnvSchema.extend({
  MODE: z.enum(['development', 'test', 'production']),
});

const env = envSchema.parse(import.meta.env);

export default env;
