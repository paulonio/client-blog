import React from 'react';

import Button from '@/components/Button';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={styles.subtitle}>
            POSTED ON <span className={styles.subtitle__bold}>STARTUP</span>
          </h4>
          <h2 className={`${styles.title} ${sen.className}`}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <div className={styles.description__wrapper}>
            <p className={styles.description}>
              By <span className={styles.description__name}>James West</span> | May 23, 2022
            </p>
            <p className={styles.description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <Button>Read More {`>`}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
