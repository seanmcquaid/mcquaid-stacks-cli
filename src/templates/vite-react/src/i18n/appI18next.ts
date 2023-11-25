import type { TOptions } from 'i18next';
import type enUSLocale from './locales/en-US';
import i18n from '.';

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type LocaleKeys = DotNestedKeys<typeof enUSLocale>;

const appI18next = {
  t: (key: LocaleKeys, options?: TOptions) => i18n.t(key, options ?? {}),
};

export default appI18next;
