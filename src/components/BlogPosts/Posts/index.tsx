import React, { FC } from 'react';
import Link from 'next/link';
import Post from '@/components/Post';

import styles from './styled.module.scss';
import { PostType } from '@/types/types';

interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  if (!posts.length) {
    return (
      <div className={styles.posts__wrapper}>
        <h2 className={styles.message}>No result</h2>
      </div>
    );
  }

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
