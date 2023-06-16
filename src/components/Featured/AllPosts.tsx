import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Button from '../Button';
import { stringToKey } from '@/utils/utils';

interface AllPostsProps {
  posts: PostType[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  const { t } = useTranslation(['featured', 'common']);

  return (
    <div className={styles.posts}>
      <div className={styles.posts__header}>
        <h2 className={sen.className}>{t('all')}</h2>
        <Link href="/blog">
          <Button buttonType="link">{t('view')}</Button>
        </Link>
      </div>
      <div className={styles.posts__wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post__container}>
            <p className="body-l">
              {t('by', { ns: 'common' })}{' '}
              <span className={styles.name}>{t(stringToKey(post.username), { ns: 'common' })}</span>{' '}
              | {t(stringToKey(post.date), { ns: 'common' })}
            </p>
            <h4 className={sen.className}>{t(stringToKey(post.title))}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
