import React from 'react';
import Pattern from './Pattern';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';
import { ABOUT_US, OUR_MISSION } from '@/constants/constants';
import Mission from './Mission';

const AboutUs = () => {
  const { title: aboutTitle, body: aboutBody } = ABOUT_US;

  return (
    <section className={styles['about-us']}>
      <Pattern />
      <div className={styles.about__wrapper}>
        <div className={styles.about__item}>
          <p className={styles.about__title}>ABOUT US</p>
          <div className={styles.about__content}>
            <h2 className={sen.className}>{aboutTitle}</h2>
            <p className="body-s">{aboutBody}</p>
            <button type="button" className={`${styles.link__button} ${sen.className}`}>
              Read More {'>'}
            </button>
          </div>
        </div>
        <Mission mission={OUR_MISSION} />
      </div>
    </section>
  );
};

export default AboutUs;
