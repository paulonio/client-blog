'use client';

import React, { useRef } from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Categories from './Categories';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const CategoryBlock = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <section ref={ref} className={styles.categories}>
      {isIntersecting && (
        <>
          <h2 className={sen.className}>Choose A Category</h2>
          <Categories type="home" categories={CATEGORY_ITEMS} />
        </>
      )}
    </section>
  );
};

export default CategoryBlock;
