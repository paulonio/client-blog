import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import { inter } from '@/styles/fonts';

const Document = () => {
  return (
    <Html>
      <Head />
      <body className={inter.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
