import React, { FC } from 'react';
import Link from 'next/link';

import Button from '@/components/Button';

import { sen } from '@/styles/fonts';

import { PostType } from '@/types/types';

import styles from './styled.module.scss';

interface HeroProps {
  post: PostType;
}

const Hero: FC<HeroProps> = ({ post }) => {
  const { username, category, date, title, body, id } = post;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.subtitle}>
            POSTED ON <span className={styles.subtitle__bold}>{category}</span>
          </h4>
          <h2 className={`${styles.title} ${sen.className}`}>{title}</h2>
          <div className={styles.description__wrapper}>
            <p className={styles.description}>
              By <span className={styles.description__name}>{username}</span> | {date}
            </p>
            <p className={styles.description}>{body}</p>
          </div>
          <Link href={`/blog/${id}`}>
            <Button buttonType="primary">Read More {`>`}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
