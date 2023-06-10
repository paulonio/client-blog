import React from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Category = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={`${sen.className} display`}>Business</h1>
        <p className="body-s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <p className={`${styles.category} body-l`}>Blog {'>'} Business</p>
      </div>
    </section>
  );
};

export default Category;
