import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import Privacy from '@/components/Privacy';
import ErrorBoundary from '@/components/ErrorBoundary';

const PrivacyPage = () => {
  return (
    <ErrorBoundary>
      <Privacy />;
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['footer', 'header', 'privacy'])),
  },
});

export default PrivacyPage;
