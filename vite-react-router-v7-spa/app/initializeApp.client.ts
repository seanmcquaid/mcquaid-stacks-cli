import initializeI18next from './i18n/initializeI18next.client';
import prepareMsw from './utils/testing/prepareMsw.client';

const initializeApp = async () => {
  await prepareMsw();

  await initializeI18next();
};

export default initializeApp;
