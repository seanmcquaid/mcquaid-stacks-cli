import type { Configuration } from '@happykit/flags/config';

export interface AppFlags {
  [key: string]: boolean | number | string | null;
  example: boolean;
}

export const config: Configuration<AppFlags> = {
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENV_KEY!,

  defaultFlags: {
    example: false,
  },
};
