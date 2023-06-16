import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import BlogFeatured from '@/components/BlogFeatured';
import BlogPosts from '@/components/BlogPosts';
import BlogCategories from '@/components/BlogCategories';
import Join from '@/components/Join';

const Blog = () => {
  return (
    <>
      <BlogFeatured />
      <article className="container">
        <BlogPosts />
        <BlogCategories />
        <Join />
      </article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'blog',
      'footer',
      'header',
      'testimonials',
      'common',
      'category',
    ])),
  },
});

export default Blog;
