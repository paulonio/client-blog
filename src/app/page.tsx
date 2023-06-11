import React from 'react';

import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import AboutUs from '@/components/AboutUs';
import CategoryBlock from '@/components/CategoryBlock';
import Special from '@/components/Special';
import Authors from '@/components/Authors';
import Logos from '@/components/Logos';
import Testimonials from '@/components/Testimonials';

import { SPECIAL_POST } from '@/constants/constants';
import { AUTHORS } from '@/constants/authors';
import { LOGOS } from '@/constants/logos';
import { TESTIMONIALS } from '@/constants/testimonials';
import Join from '@/components/Join';

const authors = AUTHORS.slice(0, 4);

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Featured />
        <AboutUs />
        <CategoryBlock />
        <Special post={SPECIAL_POST} />
        <Authors authors={authors} />
        <Logos logos={LOGOS} />
        <Testimonials testimonials={TESTIMONIALS} />
        <Join />
      </div>
    </>
  );
};

export default Home;
