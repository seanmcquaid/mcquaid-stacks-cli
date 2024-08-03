import '@/styles/index.css';
import type { PropsWithChildren } from 'react';
import Providers from './Providers';
import getLanguageFromReferer from '@/i18n/getLanguageFromReferer';

export default function RootLayout({ children }: PropsWithChildren) {
  const lang = getLanguageFromReferer();

  return (
    <html
      lang={lang}
      className="h-full min-h-full w-full min-w-full overflow-auto"
    >
      <body className="h-full min-h-full w-full min-w-full overflow-auto">
        <Providers lang={lang}>
          <main className="h-full w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
