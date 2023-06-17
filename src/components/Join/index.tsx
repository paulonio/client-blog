'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import Loader from '@/components/Loader';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Join = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);
  const { t } = useTranslation('testimonials');

  return (
    <section ref={ref} className={styles.join}>
      {isLoading && <Loader />}
      {isShowing && (
        <div className={styles.wrapper}>
          <h2 className={sen.className}>{t('join-title')}</h2>
          <p className="body-s">{t('join-body')}</p>
          <Link href="/contact">
            <Button>{t('join')}</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Join;
