import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Join = () => {
  return (
    <section className={styles.join}>
      <div className={styles.wrapper}>
        <h2 className={sen.className}>Join our team to be a part of our story</h2>
        <p className="body-s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Link href="/contact">
          <Button>Join Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default Join;
