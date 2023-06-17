import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import About from '@/components/About';
import AboutMission from '@/components/About/AboutMission';
import AboutTeam from '@/components/About/AboutTeam';
import AboutProject from '@/components/About/AboutProject';
import Authors from '@/components/Authors';
import ErrorBoundary from '@/components/ErrorBoundary';
import Join from '@/components/Join';

import { AUTHORS } from '@/constants/authors';
import { ABOUT_INFO, ABOUT_PROJECT, ABOUT_TEAM } from '@/constants/about-us';

const AboutPage = () => {
  return (
    <ErrorBoundary>
      <main className="container">
        <About info={ABOUT_INFO} />
        <AboutMission />
        <AboutTeam content={ABOUT_TEAM} />
        <AboutProject content={ABOUT_PROJECT} />
        <Authors authors={AUTHORS} />
        <Join />
      </main>
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'about',
      'footer',
      'header',
      'testimonials',
      'category',
      'mission',
      'authors',
      'common',
    ])),
  },
});

export default AboutPage;
