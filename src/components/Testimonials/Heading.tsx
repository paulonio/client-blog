import React from 'react';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h5>TESTIMONIALS</h5>
      <h2 className={sen.className}>What people say about our blog</h2>
      <p className="body-s">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
    </div>
  );
};

export default Heading;
