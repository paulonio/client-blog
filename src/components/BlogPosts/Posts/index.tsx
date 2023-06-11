import React, { FC } from 'react';
import Link from 'next/link';
import Post from '@/components/Post';

import styles from './styled.module.scss';
import { PostType } from '@/types/types';

interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts__wrapper}>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Post key={`${post.id}`} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
