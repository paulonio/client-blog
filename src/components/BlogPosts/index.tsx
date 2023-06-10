import React from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { POSTS } from '@/constants/posts';
import Posts from './Posts';

const posts = POSTS.slice(0, 5);

const BlogPosts = () => {
  return (
    <section className={styles.posts}>
      <h1 className={`${sen.className} ${styles.posts__title}`}>All posts</h1>
      <Posts posts={posts} />
      <div className={styles.buttons}>
        <button type="button" disabled className={styles.button}>
          {'<'} Prev{' '}
        </button>
        <button type="button" className={styles.button}>
          Next {'>'}
        </button>
      </div>
    </section>
  );
};

export default BlogPosts;
