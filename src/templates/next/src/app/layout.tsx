import '@/styles/index.css';
import type { PropsWithChildren } from 'react';
import Providers from './Providers';
import getLanguageFromReferer from '@/i18n/getLanguageFromReferer';

export default function RootLayout({ children }: PropsWithChildren) {
  const lang = getLanguageFromReferer();

  return (
    <html lang={lang}>
      <body>
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
