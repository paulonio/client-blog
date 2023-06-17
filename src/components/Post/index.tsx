import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import type { PostType } from '@/types/types';

import styles from './styled.module.scss';
import { stringToKey } from '@/utils/utils';

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { t } = useTranslation(['blog', 'common']);

  const { category, title, body, urlToImage } = post;
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img src={urlToImage} alt={`${category} post`} />
      </div>
      <div className={styles.content}>
        <h5>{t(stringToKey(category), { ns: 'common' })}</h5>
        <h2>{t(stringToKey(title), { ns: 'common' })}</h2>
        <p className="body-s">{t(stringToKey(body))}</p>
      </div>
    </div>
  );
};

export default Post;
