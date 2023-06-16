'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';

import Categories from './Categories';

import { CATEGORY_ITEMS } from '@/constants/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';

const CategoryBlock = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);
  const { t } = useTranslation('category');

  return (
    <section ref={ref} className={styles.categories}>
      {isIntersecting && (
        <>
          <h2 className={sen.className}>{t('heading')}</h2>
          <Categories type="home" categories={CATEGORY_ITEMS} />
        </>
      )}
    </section>
  );
};

export default CategoryBlock;
