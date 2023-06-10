import React, { FC } from 'react';
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
        <Post key={`${post.urlToImage} ${post.title}`} post={post} />
      ))}
    </div>
  );
};

export default Posts;
