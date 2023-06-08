import React from 'react';

import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import AboutUs from '@/components/AboutUs';
import CategoryBlock from '@/components/CategoryBlock';

const page = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Featured />
        <AboutUs />
        <CategoryBlock />
      </div>
    </>
  );
};

export default page;
