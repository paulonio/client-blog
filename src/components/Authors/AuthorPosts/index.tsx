import React, { FC } from 'react';
import { sen } from '@/styles/fonts';

import Posts from '@/components/BlogPosts/Posts';

import type { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface AuthorPostsProps {
  posts: PostType[];
}

const AuthorPosts: FC<AuthorPostsProps> = ({ posts }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={`${styles.title} ${sen.className}`}>My Posts</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default AuthorPosts;
