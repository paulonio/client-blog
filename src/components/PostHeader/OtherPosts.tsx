import React, { FC } from 'react';
import { sen } from '@/styles/fonts';
import { PostType } from '@/types/types';
import Post from './Post';

import styles from './styled.module.scss';

interface OtherPostsProps {
  posts: PostType[];
}

const OtherPosts: FC<OtherPostsProps> = ({ posts }) => {
  return (
    <section className={styles.other}>
      <h2 className={sen.className}>What to read next</h2>
      <div className={styles.other__wrapper}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default OtherPosts;
