import React from 'react';

import styles from './styled.module.scss';

const Pattern = () => {
  return (
    <div className={styles.pattern__container}>
      <div className={styles.pattern__white} />
      <div className={styles.pattern__yellow} />
      <div className={styles.pattern__purple} />
    </div>
  );
};

export default Pattern;
