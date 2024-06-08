'use client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from '@/components/ui/Toaster';
import queryClient from '@/services/queryClient';
import '@/i18n/i18next';

interface ProvidersProps extends PropsWithChildren {
  lang: string;
}

const Providers = ({ children, lang }: ProvidersProps) => {
  const { i18n } = useTranslation();

  i18n.changeLanguage(lang);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
      <Toaster />
    </QueryClientProvider>
  );
};

export default Providers;
