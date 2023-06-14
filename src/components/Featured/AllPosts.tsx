import React, { FC } from 'react';

import Link from 'next/link';
import { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Button from '../Button';

interface AllPostsProps {
  posts: PostType[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.posts__header}>
        <h2 className={sen.className}>All Posts</h2>
        <Link href="/blog">
          <Button buttonType="link">View All</Button>
        </Link>
      </div>
      <div className={styles.posts__wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post__container}>
            <p className="body-l">
              By <span className={styles.name}>{post.username}</span> | {post.date}
            </p>
            <h4 className={sen.className}>{post.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
