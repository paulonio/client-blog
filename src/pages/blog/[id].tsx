import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import PostHeader from '@/components/PostHeader';
import PostImage from '@/components/PostHeader/PostImage';
import PostContent from '@/components/PostHeader/PostContent';
import OtherPosts from '@/components/PostHeader/OtherPosts';
import Join from '@/components/Join';

import { POSTS } from '@/constants/posts';

import { getPost } from '@/utils/utils';

const posts = POSTS.slice(0, 3);

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = useMemo(() => getPost(id), [id]);

  return (
    <>
      {post && (
        <>
          <PostHeader post={post} />
          <PostImage urlToImage={post.urlToImage} tag={post.category} />
        </>
      )}
      <PostContent />
      <OtherPosts posts={posts} />
      <Join />
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

export default BlogPost;
