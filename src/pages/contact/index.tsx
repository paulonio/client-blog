import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import Contact from '@/components/Contact';

const ContactPage = () => {
  return <Contact />;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['footer', 'header', 'contact', 'common'])),
  },
});

export default ContactPage;
