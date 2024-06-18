import { headers } from 'next/headers';

const getLanguageFromReferer = () => {
  const referer = headers().get('referer') ?? '';
  let lang = 'en-US';

  if (referer.includes('.ca')) {
    lang = 'en-CA';
  }

  return lang;
};

export default getLanguageFromReferer;
