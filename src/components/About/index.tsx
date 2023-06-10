import React, { FC } from 'react';
import { AboutType, InfoType } from '@/types/types';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';

interface AboutProps {
  heading: AboutType;
  info: InfoType[];
}

const About: FC<AboutProps> = ({ heading, info }) => {
  const { title, body } = heading;

  return (
    <section className={styles.about}>
      <div className={styles.heading}>
        <div className={styles.about__title}>
          <h5>ABOUT US</h5>
          <h1>{title}</h1>
        </div>
        <p className={`${styles.about__description} body-s`}>
          {body} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>
      <div>
        <div className={styles.info}>
          {info.map(({ amount, description }) => (
            <div key={description} className={styles.info__item}>
              <p className={`${sen.className} display`}>{amount}</p>
              <p className="body-l">{description}</p>
            </div>
          ))}
        </div>
        <div className={styles.patterns__wrapper}>
          <div className={styles.pattern__left}>
            <div />
            <div />
          </div>
          <div className={styles.pattern__right} />
        </div>
      </div>
    </section>
  );
};

export default About;
