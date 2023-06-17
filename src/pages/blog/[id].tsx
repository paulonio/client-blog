import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import PostHeader from '@/components/PostHeader';
import PostImage from '@/components/PostHeader/PostImage';
import PostContent from '@/components/PostHeader/PostContent';
import OtherPosts from '@/components/PostHeader/OtherPosts';
import Join from '@/components/Join';
import ErrorBoundary from '@/components/ErrorBoundary';

import { getNextPosts, getPost } from '@/utils/utils';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = useMemo(() => getPost(id), [id]);
  const posts = useMemo(() => getNextPosts(id), [id]);

  return (
    <ErrorBoundary>
      <main className="container">
        {post && (
          <>
            <PostHeader post={post} />
            <PostImage urlToImage={post.urlToImage} tag={post.category} />
          </>
        )}
        <PostContent />
        {posts && <OtherPosts posts={posts} />}
        <Join />
      </main>
    </ErrorBoundary>
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
