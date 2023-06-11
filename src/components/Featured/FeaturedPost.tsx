import React, { FC } from 'react';

import Link from 'next/link';
import Button from '@/components/Button';

import type { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface SinglePostProps {
  post: PostType;
}

const FeaturedPost: FC<SinglePostProps> = ({ post }) => {
  const { id, username, date, title, body, urlToImage } = post;

  return (
    <div className={styles.featured__post}>
      <h2 className={sen.className}>Featured Post</h2>
      <div className={styles.post__wrapper}>
        <div className={styles.image}>
          <img src={urlToImage} alt="Featured" />
        </div>
        <div className={styles.post__content}>
          <p className="body-l">
            By <span className={styles.name}>{username}</span> | {date}
          </p>
          <h3 className={sen.className}>{title}</h3>
          <p className="body-s">{body}</p>
        </div>
        <Link href={`/blog/${id}`}>
          <Button>Read More {'>'}</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
