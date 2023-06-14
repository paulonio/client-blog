import React, { FC } from 'react';

import styles from './styled.module.scss';
import { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

interface PostHeaderProps {
  post: PostType;
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const { urlToAvatar, username, date, category, title } = post;

  return (
    <section className={styles.post__title}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={urlToAvatar} alt={username} />
        </div>
        <div>
          <h4 className={styles.username}>{username}</h4>
          <p className="body-s">Posted on {date}</p>
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h4 className={sen.className}>{category}</h4>
    </section>
  );
};

export default PostHeader;
