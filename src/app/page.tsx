import React from 'react';

import Hero from '@/components/Hero';
import Featured from '@/components/Featured';

const page = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Featured />
      </div>
    </>
  );
};

export default page;
