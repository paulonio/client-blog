import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';

import { sen } from '@/styles/fonts';

import { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface HeroProps {
  post: PostType;
}

const Hero: FC<HeroProps> = ({ post }) => {
  const { id } = post;

  const { t } = useTranslation('hero');

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.subtitle}>
            <span className={styles.subtitle__bold}>{t('category')}</span>
          </h4>
          <h2 className={`${styles.title} ${sen.className}`}>{t('title')}</h2>
          <div className={styles.description__wrapper}>
            <p className={styles.description}>
              <span className={styles.description__name}>{t('author')}</span> | {t('date')}
            </p>
            <p className={styles.description}>{t('body')}</p>
          </div>
          <Link href={`/blog/${id}`}>
            <Button buttonType="primary">
              {t('read')} {`>`}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
