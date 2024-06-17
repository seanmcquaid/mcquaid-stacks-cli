import type { TOptions } from 'i18next';
import setAcceptLanguageHeaders from './setAcceptLanguageHeaders';
import i18next from './i18next.server';
import type enUSLocale from '@/i18n/locales/en-US';

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

const getAppFixedT = async (request: Request) => {
  setAcceptLanguageHeaders(request);
  const t = await i18next.getFixedT(request);

  return {
    t: (key: LocaleKeys, options?: TOptions) => t(key, options ?? {}),
  };
};

export default getAppFixedT;
