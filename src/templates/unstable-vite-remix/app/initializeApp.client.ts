import env from './env';
import initializeI18n from './i18n/initializeI18n';

const initializeApp = async () => {
  if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
    const worker = await import('../mocks/worker');
    worker.default.start({ onUnhandledRequest: 'bypass' });
  }

  await initializeI18n();

  return Promise.resolve();
};

export default initializeApp;
