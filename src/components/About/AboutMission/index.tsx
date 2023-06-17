import React from 'react';
import Mission from '@/components/AboutUs/Mission';

import styles from './styled.module.scss';

const AboutMission = () => {
  return (
    <section className={styles.missions}>
      <Mission />
      <Mission />
    </section>
  );
};

export default AboutMission;
