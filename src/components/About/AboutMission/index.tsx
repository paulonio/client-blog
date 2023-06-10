import React from 'react';
import Mission from '@/components/AboutUs/Mission';
import { OUR_MISSION, OUR_VISION } from '@/constants/constants';

import styles from './styled.module.scss';

const AboutMission = () => {
  return (
    <section className={styles.missions}>
      <Mission mission={OUR_MISSION} />
      <Mission mission={OUR_VISION} />
    </section>
  );
};

export default AboutMission;
