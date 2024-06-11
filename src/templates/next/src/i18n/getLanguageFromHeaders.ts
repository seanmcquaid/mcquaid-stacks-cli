import { headers } from 'next/headers';
import acceptLanguage from 'accept-language';
import config from './config';

acceptLanguage.languages(config.supportedLngs);

const getLanguageFromHeaders = () => {
  const header = headers().get('accept-language') ?? '';
  const lang = acceptLanguage.get(header) ?? 'en-US';

  return lang;
};

export default getLanguageFromHeaders;
