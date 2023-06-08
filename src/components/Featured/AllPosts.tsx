import React, { FC } from 'react';

import { Post } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AllPostsProps {
  posts: Post[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.posts__header}>
        <h2 className={sen.className}>All Posts</h2>
        <button type="button" className={`body-s ${styles.link__button}`}>
          View All
        </button>
      </div>
      <div className={styles.posts__wrapper}>
        {posts.map((post) => (
          <div className={styles.post__container}>
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
