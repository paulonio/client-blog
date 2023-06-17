import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import Contact from '@/components/Contact';
import ErrorBoundary from '@/components/ErrorBoundary';

const ContactPage = () => {
  return (
    <ErrorBoundary>
      <Contact />
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['footer', 'header', 'contact', 'common'])),
  },
});

export default ContactPage;
