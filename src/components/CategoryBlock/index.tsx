import React from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Categories from './Categories';

const CategoryBlock = () => {
  return (
    <section className={styles.categories}>
      <h2 className={sen.className}>Choose A Category</h2>
      <Categories type="home" categories={CATEGORY_ITEMS} />
    </section>
  );
};

export default CategoryBlock;
