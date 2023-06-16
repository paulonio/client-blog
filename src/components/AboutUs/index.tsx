'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Pattern from './Pattern';
import Mission from './Mission';
import Button from '../Button';

import { ABOUT_US, OUR_MISSION } from '@/constants/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';

const AboutUs = () => {
  const { title: aboutTitle, body: aboutBody } = ABOUT_US;
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);
  const { t } = useTranslation('about');

  return (
    <section ref={ref} className={styles['about-us']}>
      {isIntersecting && (
        <>
          <Pattern />
          <div className={styles.about__wrapper}>
            <div className={styles.about__item}>
              <p className={styles.about__title}>{t('header')}</p>
              <div className={styles.about__content}>
                <h2 className={sen.className}>{t('title')}</h2>
                <p className="body-s">{t('body')}</p>
                <Link href="/about">
                  <Button buttonType="link">
                    {t('read')} {'>'}
                  </Button>
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
