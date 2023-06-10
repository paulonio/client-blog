import React, { FC } from 'react';
import { PostType } from '@/types/types';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { username, date, title, body, urlToImage } = post;

  return (
    <div className={styles.post__wrapper}>
      <div className={styles.post__image}>
        <img src={urlToImage} alt={`${username} post`} />
      </div>
      <div className={styles.post__content}>
        <p className="body-l">
          By <span className={styles.username}>{username}</span> | {date}
        </p>
        <h3 className={sen.className}>{title}</h3>
        <p className="body-s">{body}</p>
      </div>
    </div>
  );
};

export default Post;
