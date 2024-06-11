import { createInstance } from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import config from './config';
import getLanguageFromHeaders from './getLanguageFromHeaders';

const initI18next = async () => {
  const i18nInstance = createInstance();
  await i18nInstance.use(I18NextHttpBackend).init({
    ...config,
    backend: { loadPath: './locales/{{lng}}.ts' },
  });
  return i18nInstance;
};

const getAppFixedT = async () => {
  const i18n = await initI18next();
  const lang = getLanguageFromHeaders();
  const t = i18n.getFixedT(lang);

  return t;
};

export default getAppFixedT;
