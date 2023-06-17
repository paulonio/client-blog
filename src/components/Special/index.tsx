'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Button from '../Button';
import Loader from '@/components/Loader';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Special = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);
  const { t } = useTranslation('special');

  return (
    <section ref={ref} className={styles.special}>
      {isLoading && <Loader />}
      {isShowing && (
        <>
          <div className={styles.image}>
            <img src="/assets/images/special.jpg" alt="Special" />
          </div>
          <div className={styles.special__post}>
            <h5>{t('header')}</h5>
            <h2 className={sen.className}>{t('title')}</h2>
            <p className="body-s">{t('body')}</p>
            <Link href="/about">
              <Button>
                {t('discover')} {'>'}
              </Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Special;
