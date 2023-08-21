import { ZodFirstPartySchemaTypes } from 'zod';

declare module 'ky' {
  export interface Options {
    validationSchema?: ZodFirstPartySchemaTypes;
  }

  export interface NormalizedOptions {
    validationSchema?: ZodFirstPartySchemaTypes;
  }
}
