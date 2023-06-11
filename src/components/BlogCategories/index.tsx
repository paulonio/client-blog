import React from 'react';
import Categories from '../CategoryBlock/Categories';

import { CATEGORY_ITEMS } from '@/constants/constants';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const BlogCategories = () => {
  return (
    <section className={styles.categories}>
      <h2 className={sen.className}>All Categories</h2>
      <Categories type="home" categories={CATEGORY_ITEMS} />
    </section>
  );
};

export default BlogCategories;
