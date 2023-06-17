import React from 'react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import nextI18NextConfig from '../../next-i18next.config';

import RootLayout from './layout';

import './globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
