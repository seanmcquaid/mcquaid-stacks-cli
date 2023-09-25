import ReduxProvider from '@/store/ReduxProvider';
import InitializeApp from '@/components/app/InitializeApp';
import '@/i18n/client';
import type { PropsWithChildren } from 'react';
import '@/env.client';
import '@/env.server';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Tech Talk Pro',
  description: 'Helping first time speakers get on stage!',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en-US">
      <body>
        <ReduxProvider>
          <InitializeApp>{children}</InitializeApp>
        </ReduxProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
};

export default RootLayout;
