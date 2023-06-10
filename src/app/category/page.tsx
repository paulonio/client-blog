import React from 'react';

import Category from '@/components/Category';
import CategoryControls from '@/components/Category/CategoryControls';

const CategoryPage = () => {
  return (
    <>
      <Category />
      <div className="container">
        <CategoryControls />
      </div>
    </>
  );
};

export default CategoryPage;
