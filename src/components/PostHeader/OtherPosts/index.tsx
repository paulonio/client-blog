import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Post from './Post';

import type { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from '../styled.module.scss';

interface OtherPostsProps {
  posts: PostType[];
}

const OtherPosts: FC<OtherPostsProps> = ({ posts }) => {
  const { t } = useTranslation('blog');

  return (
    <section className={styles.other}>
      <h2 className={sen.className}>{t('next-posts')}</h2>
      <div className={styles.other__wrapper}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default OtherPosts;
