import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import Privacy from '@/components/Privacy';

const PrivacyPage = () => {
  return <Privacy />;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['footer', 'header', 'privacy'])),
  },
});

export default PrivacyPage;
