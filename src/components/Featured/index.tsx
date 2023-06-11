'use client';

import React, { useRef } from 'react';

import FeaturedPost from './FeaturedPost';
import AllPosts from './AllPosts';

import { POSTS } from '@/constants/posts';

import styles from './styled.module.scss';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Featured = () => {
  const [post] = POSTS;
  const posts = POSTS.slice(0, 4);

  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <section ref={ref} className={styles.featured}>
      {isIntersecting && (
        <>
          <FeaturedPost post={post} />
          <AllPosts posts={posts} />
        </>
      )}
    </section>
  );
};

export default Featured;
