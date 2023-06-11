import React, { FC } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { AboutType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface SpecialProps {
  post: AboutType;
}

const Special: FC<SpecialProps> = ({ post }) => {
  const { title, body } = post;

  return (
    <section className={styles.special}>
      <div className={styles.image}>
        <img src="/assets/images/special.jpg" alt="Special" />
      </div>
      <div className={styles.special__post}>
        <h5>WHY WE STARTED</h5>
        <h2 className={sen.className}>{title}</h2>
        <p className="body-s">{body}</p>
        <Link href="/about">
          <Button>Discover our story {'>'}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Special;
