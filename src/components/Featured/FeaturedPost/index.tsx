import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Button from '@/components/Button';

import { stringToKey } from '@/utils/utils';
import type { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from '../styled.module.scss';

interface SinglePostProps {
  post: PostType;
}

const FeaturedPost: FC<SinglePostProps> = ({ post }) => {
  const { id, username, date, title, body, urlToImage } = post;
  const { t } = useTranslation(['featured', 'common']);

  return (
    <div className={styles.featured__post}>
      <h2 className={sen.className}>{t('title')}</h2>
      <div className={styles.post__wrapper}>
        <div className={styles.image}>
          <img src={urlToImage} alt="Featured" />
        </div>
        <div className={styles.post__content}>
          <p className="body-l">
            {t('by', { ns: 'common' })}{' '}
            <span className={styles.name}>{t(stringToKey(username), { ns: 'common' })}</span> |{' '}
            {t(stringToKey(date), { ns: 'common' })}
          </p>
          <h3 className={sen.className}>{t(stringToKey(title))}</h3>
          <p className="body-s">{t(stringToKey(body))}</p>
        </div>
        <Link href={`/blog/${id}`}>
          <Button>
            {t('read')} {'>'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
