import React, { FC, useMemo } from 'react';
import PostHeader from '@/components/PostHeader';
import { POSTS } from '@/constants/posts';
import PostImage from '@/components/PostHeader/PostImage';
import PostContent from '@/components/PostHeader/PostContent';
import OtherPosts from '@/components/PostHeader/OtherPosts';
import Join from '@/components/Join';
import { getPost } from '@/utils/utils';

const posts = POSTS.slice(0, 3);

interface BlogPostProps {
  params: { id: string };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  const { id } = params;
  const post = useMemo(() => getPost(id), [id]);

  return (
    <>
      <PostHeader post={post} />
      <PostImage urlToImage={post.urlToImage} tag={post.category} />
      <PostContent />
      <OtherPosts posts={posts} />
      <Join />
    </>
  );
};

export default BlogPost;
