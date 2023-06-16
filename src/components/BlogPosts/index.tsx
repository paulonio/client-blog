'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

import Posts from './Posts';

import { usePagination } from '@/hooks/usePagination';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const BlogPosts = () => {
  const { posts, isPrevDisabled, isNextDisabled, handleNextClick, handlePrevClick } =
    usePagination();
  const { t } = useTranslation('blog');

  return (
    <section className={styles.posts}>
      <h1 className={`${sen.className} ${styles.posts__title}`}>{t('posts')}</h1>
      <Posts posts={posts} />
      <div className={styles.buttons}>
        <button
          type="button"
          disabled={isPrevDisabled}
          className={styles.button}
          onClick={handlePrevClick}
        >
          {'<'} {t('prev')}{' '}
        </button>
        <button
          type="button"
          disabled={isNextDisabled}
          className={styles.button}
          onClick={handleNextClick}
        >
          {t('next')} {'>'}
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;
