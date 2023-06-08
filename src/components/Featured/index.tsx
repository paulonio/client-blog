import React from 'react';

import FeaturedPost from './FeaturedPost';
import AllPosts from './AllPosts';

import { POSTS } from '@/constants/posts';

import styles from './styled.module.scss';

const Featured = () => {
  const [post] = POSTS;
  const posts = POSTS.slice(0, 4);

  return (
    <section className={styles.featured}>
      <FeaturedPost post={post} />
      <AllPosts posts={posts} />
    </section>
  );
};

export default Featured;
