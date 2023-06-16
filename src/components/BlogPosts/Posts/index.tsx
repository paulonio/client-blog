import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Post from '@/components/Post';

import { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface PostsProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const { t } = useTranslation('blog');

  if (!posts.length) {
    return (
      <div className={styles.posts__wrapper}>
        <h2 className={styles.message}>{t('no-result')}</h2>
      </div>
    );
  }

  return (
    <div className={styles.posts__wrapper}>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Post key={`${post.id}`} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
