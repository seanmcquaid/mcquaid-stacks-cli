import PageWrapper from '@/components/app/PageWrapper';
import LinkButton from '@/components/ui/LinkButton';
import config from '@/i18n/config';
import acceptLanguage from 'accept-language';
import { createInstance } from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { headers } from 'next/headers';
// import useAppTranslation from '@/hooks/useAppTranslation';

acceptLanguage.languages(config.supportedLngs);

const initI18next = async () => {
  const i18nInstance = createInstance();
  await i18nInstance.use(I18NextHttpBackend).init({
    ...config,
    backend: { loadPath: './locales/{{lng}}.ts' },
    detection: {
      order: ['cookie'],
      caches: [],
    },
  });
  return i18nInstance;
};

const HomePage = async () => {
  const i18n = await initI18next();
  const header = headers().get('accept-language') ?? '';
  const lang = acceptLanguage.get(header) ?? 'en-US';
  const t = i18n.getFixedT(lang);

  return (
    <PageWrapper>
      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.subTitle')}</p>
      <LinkButton href={t('Routes.reactQuery')} className="m-4">
        {t('HomePage.reactQuery')}
      </LinkButton>
      <LinkButton href={t('Routes.remixHookFormZod')} className="m-4">
        {t('HomePage.remixHookFormZod')}
      </LinkButton>
      <LinkButton href={t('Routes.remix')} className="m-4">
        {t('HomePage.remix')}
      </LinkButton>
      <LinkButton href={t('Routes.kitchenSink')} className="m-4">
        {t('HomePage.kitchenSink')}
      </LinkButton>
    </PageWrapper>
  );
};

export default HomePage;
