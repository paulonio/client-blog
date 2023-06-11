import React, { FC } from 'react';

import Category from '@/components/Category';
import CategoryControls from '@/components/Category/CategoryControls';

interface CategoryProps {
  params: { category: string };
}

const CategoryPage: FC<CategoryProps> = ({ params }) => {
  const { category } = params;

  return (
    <>
      <Category category={category} />
      <div className="container">
        <CategoryControls currentCategory={category} />
      </div>
    </>
  );
};

export default CategoryPage;
