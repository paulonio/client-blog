import React, { FC } from 'react';
import type { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { category, title, body, urlToImage } = post;
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img src={urlToImage} alt={`${category} post`} />
      </div>
      <div className={styles.content}>
        <h5>{category}</h5>
        <h2>{title}</h2>
        <p className="body-s">{body}</p>
      </div>
    </div>
  );
};

export default Post;
