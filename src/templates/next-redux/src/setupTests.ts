import '@testing-library/jest-dom/vitest';
import * as nextRouterMock from 'next-router-mock';

vi.mock('next/navigation', () => nextRouterMock);

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {},
    };
  },
}));
