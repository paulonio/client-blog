'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Pattern from './Pattern';
import Mission from './Mission';
import Button from '../Button';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';
import Loader from '@/components/Loader';

const AboutUs = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);
  const { t } = useTranslation('about');

  return (
    <section ref={ref} className={styles['about-us']}>
      {isLoading && <Loader />}
      {isShowing && (
        <>
          <Pattern />
          <div className={styles.about__wrapper}>
            <div className={styles.about__item}>
              <p className={styles.about__title} data-testid="about-us-title">
                {t('header')}
              </p>
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
            <Mission />
          </div>
        </>
      )}
    </section>
  );
};

export default AboutUs;
