import { z } from 'zod';
import sharedEnvSchema from './sharedEnvSchema';

const envSchema = sharedEnvSchema.extend({
  EXAMPLE_SECRET_KEY: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

console.log(process.env);

const env = envSchema.parse(process.env);

export default env;
