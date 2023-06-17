import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import type { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import { stringToKey } from '@/utils/utils';
import styles from '@/components/PostHeader/styled.module.scss';

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { t } = useTranslation(['blog', 'common']);
  const { id, username, date, title, body, urlToImage } = post;

  return (
    <Link className={styles.post__wrapper} href={`/blog/${id}`}>
      <div className={styles.post__image}>
        <img src={urlToImage} alt={`${username} post`} />
      </div>
      <div className={styles.post__content}>
        <p className="body-l">
          {t('by', { ns: 'common' })}{' '}
          <span className={styles.username}>{t(stringToKey(username), { ns: 'common' })}</span> |{' '}
          {t(stringToKey(date), { ns: 'common' })}
        </p>
        <h3 className={sen.className}>{t(stringToKey(title))}</h3>
        <p className="body-s">{t(stringToKey(body))}</p>
      </div>
    </Link>
  );
};

export default Post;
