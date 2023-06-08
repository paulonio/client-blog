import React from 'react';
import Pattern from './Pattern';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';
import { ABOUT_US, OUR_MISSION } from '@/constants/constants';

const AboutUs = () => {
  const { title: aboutTitle, description: aboutDescription } = ABOUT_US;
  const { title: missionTitle, description: missionDescription } = OUR_MISSION;

  return (
    <section className={styles['about-us']}>
      <Pattern />
      <div className={styles.about__wrapper}>
        <div className={styles.about__item}>
          <p className={styles.about__title}>ABOUT US</p>
          <div className={styles.about__content}>
            <h2 className={sen.className}>{aboutTitle}</h2>
            <p className="body-s">{aboutDescription}</p>
            <button type="button" className={`${styles.link__button} ${sen.className}`}>
              Read More {'>'}
            </button>
          </div>
        </div>
        <div className={styles.about__item}>
          <p className={styles.about__title}>OUR MISSION</p>
          <div className={styles.about__content}>
            <h3 className={sen.className}>{missionTitle}</h3>
            <p className="body-s">{missionDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
