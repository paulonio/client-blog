import React from 'react';
import PostHeader from '@/components/PostHeader';
import { POSTS } from '@/constants/posts';
import PostImage from '@/components/PostHeader/PostImage';
import PostContent from '@/components/PostHeader/PostContent';
import OtherPosts from '@/components/PostHeader/OtherPosts';
import Join from '@/components/Join';

const [post] = POSTS;
const posts = POSTS.slice(0, 3);

const page = () => {
  return (
    <>
      <PostHeader post={post} />
      <PostImage urlToImage={post.urlToImage} tag={post.tag} />
      <PostContent />
      <OtherPosts posts={posts} />
      <Join />
    </>
  );
};

export default page;
