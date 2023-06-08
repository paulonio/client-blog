import React, { FC } from 'react';
import Button from '../Button';
import { About } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface SpecialProps {
  post: About;
}

const Special: FC<SpecialProps> = ({ post }) => {
  const { title, description } = post;

  return (
    <section className={styles.special}>
      <img src="/assets/images/special.jpg" alt="Special" />
      <div className={styles.special__post}>
        <h5>WHY WE STARTED</h5>
        <h2 className={sen.className}>{title}</h2>
        <p className="body-s">{description}</p>
        <Button>Discover our story {'>'}</Button>
      </div>
    </section>
  );
};

export default Special;
