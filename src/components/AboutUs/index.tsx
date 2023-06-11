'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Pattern from './Pattern';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';
import { ABOUT_US, OUR_MISSION } from '@/constants/constants';
import Mission from './Mission';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutUs = () => {
  const { title: aboutTitle, body: aboutBody } = ABOUT_US;
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <section ref={ref} className={styles['about-us']}>
      {isIntersecting && (
        <>
          <Pattern />
          <div className={styles.about__wrapper}>
            <div className={styles.about__item}>
              <p className={styles.about__title}>ABOUT US</p>
              <div className={styles.about__content}>
                <h2 className={sen.className}>{aboutTitle}</h2>
                <p className="body-s">{aboutBody}</p>
                <Link href="/about">
                  <button type="button" className={`${styles.link__button} ${sen.className}`}>
                    Read More {'>'}
                  </button>
                </Link>
              </div>
            </div>
            <Mission mission={OUR_MISSION} />
          </div>
        </>
      )}
    </section>
  );
};

export default AboutUs;
