import React, { FC } from 'react';
import Link from 'next/link';
import { PostType } from '@/types/types';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { id, username, date, title, body, urlToImage } = post;

  return (
    <Link className={styles.post__wrapper} href={`/blog/${id}`}>
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
    </Link>
  );
};

export default Post;
