'use client';

import React, { useMemo, useState } from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { POSTS } from '@/constants/posts';
import Posts from './Posts';
import { getPostsByPage } from '@/utils/utils';

const BlogPosts = () => {
  const [page, setPage] = useState<number>(0);
  const lastPage = Math.floor(POSTS.length / 5);

  const posts = useMemo(() => getPostsByPage(POSTS, page), [page]);

  const handleNextClick = () => {
    if (page !== lastPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.posts}>
      <h1 className={`${sen.className} ${styles.posts__title}`}>All posts</h1>
      <Posts posts={posts} />
      <div className={styles.buttons}>
        <button
          type="button"
          disabled={page === 0}
          className={styles.button}
          onClick={handlePrevClick}
        >
          {'<'} Prev{' '}
        </button>
        <button
          type="button"
          disabled={page === lastPage}
          className={styles.button}
          onClick={handleNextClick}
        >
          Next {'>'}
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;
