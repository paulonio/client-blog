import React from 'react';
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

export default Blog;
