'use client';

import React, { useRef } from 'react';

import FeaturedPost from '@/components/Featured/FeaturedPost';
import AllPosts from '@/components/Featured/AllPosts';
import Loader from '@/components/Loader';

import { POSTS } from '@/constants/posts';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './styled.module.scss';

const Featured = () => {
  const [post] = POSTS;
  const posts = POSTS.slice(0, 4);

  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);

  return (
    <section ref={ref} className={styles.featured}>
      {isLoading && <Loader />}
      {isShowing && (
        <>
          <FeaturedPost post={post} />
          <AllPosts posts={posts} />
        </>
      )}
    </section>
  );
};

export default Featured;
