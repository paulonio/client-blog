import React, { FC } from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface CategoryProps {
  category: string;
}

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={`${sen.className} display`}>{category}</h1>
        <p className="body-s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <p className={`${styles.category} body-l`}>
          Blog {'>'} {category}
        </p>
      </div>
    </section>
  );
};

export default Category;
