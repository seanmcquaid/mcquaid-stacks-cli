import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import ReduxProvider from '@/store/ReduxProvider';
import InitializeApp from '@/components/app/InitializeApp';
import '@/i18n/client';
import 'antd/dist/reset.css';
import type { PropsWithChildren } from 'react';
import '@/env.client';
import '@/env.server';
import AppThemeProvider from '@/styles/AppThemeProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Tech Talk Pro',
  description: 'Helping first time speakers get on stage!',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <StyledComponentsRegistry>
        <AppThemeProvider>
          <html lang="en-US">
            <Analytics />
            <body>
              <ReduxProvider>
                <InitializeApp>{children}</InitializeApp>
              </ReduxProvider>
              <Toaster position="bottom-center" reverseOrder={false} />
            </body>
          </html>
        </AppThemeProvider>
      </StyledComponentsRegistry>
    </ClerkProvider>
  );
};

export default RootLayout;
