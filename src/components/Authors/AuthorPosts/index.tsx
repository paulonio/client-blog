import React from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Posts from '@/components/BlogPosts/Posts';
import { POSTS } from '@/constants/posts';

const posts = POSTS.slice(0, 2);

const AuthorPosts = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={`${styles.title} ${sen.className}`}>My Posts</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default AuthorPosts;
