import React from 'react';

import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import AboutUs from '@/components/AboutUs';
import CategoryBlock from '@/components/CategoryBlock';
import Special from '@/components/Special';
import Authors from '@/components/Authors';

import { SPECIAL_POST } from '@/constants/constants';
import { AUTHORS } from '@/constants/authors';

const page = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Featured />
        <AboutUs />
        <CategoryBlock />
        <Special post={SPECIAL_POST} />
        <Authors authors={AUTHORS} />
      </div>
    </>
  );
};

export default page;
