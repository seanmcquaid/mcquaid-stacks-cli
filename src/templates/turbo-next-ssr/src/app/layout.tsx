import '@/styles/index.css';
import type { PropsWithChildren } from 'react';
import Providers from './Providers';
import getLanguageFromReferer from '@/i18n/getLanguageFromReferer';

export default function RootLayout({ children }: PropsWithChildren) {
  const lang = getLanguageFromReferer();

  return (
    <html lang={lang} className="min-h-screen w-full">
      <body className="min-h-screen w-full">
        <Providers lang={lang}>
          <main className="h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
