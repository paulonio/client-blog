import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Posts from '@/components/BlogPosts/Posts';

import { sen } from '@/styles/fonts';
import type { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface AuthorPostsProps {
  posts: PostType[];
}

const AuthorPosts: FC<AuthorPostsProps> = ({ posts }) => {
  const { t } = useTranslation('authors');

  return (
    <section className={styles.wrapper}>
      <h2 className={`${styles.title} ${sen.className}`}>{t('page.title')}</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default AuthorPosts;
