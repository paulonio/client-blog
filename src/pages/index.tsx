'use client';

import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import AboutUs from '@/components/AboutUs';
import CategoryBlock from '@/components/CategoryBlock';
import Special from '@/components/Special';
import Authors from '@/components/Authors';
import Logos from '@/components/Logos';
import Testimonials from '@/components/Testimonials';
import Join from '@/components/Join';
import ErrorBoundary from '@/components/ErrorBoundary';

import { AUTHORS } from '@/constants/authors';
import { LOGOS } from '@/constants/logos';
import { TESTIMONIALS } from '@/constants/testimonials';

import { getHeroPost } from '@/utils/utils';

const authors = AUTHORS.slice(0, 4);

const Home = () => {
  const heroPost = getHeroPost();

  return (
    <ErrorBoundary>
      <Hero post={heroPost} />
      <div className="container">
        <Featured />
        <AboutUs />
        <CategoryBlock />
        <Special />
        <Authors authors={authors} />
        <Logos logos={LOGOS} />
        <Testimonials testimonials={TESTIMONIALS} />
        <Join />
      </div>
    </ErrorBoundary>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        [
          'common',
          'header',
          'hero',
          'featured',
          'about',
          'mission',
          'category',
          'special',
          'authors',
          'logos',
          'testimonials',
          'footer',
        ],
        null,
        ['en', 'ru']
      )),
    },
  };
};

export default Home;
