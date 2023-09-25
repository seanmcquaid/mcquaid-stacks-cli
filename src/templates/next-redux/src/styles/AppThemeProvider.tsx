'use client';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const AppThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppThemeProvider;
