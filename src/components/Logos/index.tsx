'use client';

import React, { FC, SVGProps, useRef } from 'react';
import { useTranslation } from 'next-i18next';

import Loader from '@/components/Loader';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface LogosProps {
  logos: FC<SVGProps<SVGSVGElement>>[];
}

const Logos: FC<LogosProps> = ({ logos }) => {
  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);
  const { t } = useTranslation('logos');

  return (
    <section ref={ref} className={styles.logos}>
      {isLoading && <Loader />}
      {isShowing && (
        <>
          <div>
            <p className={`${styles.subtitle} body-l`}>{t('heading')}</p>
            <h4 className={`${sen.className} ${styles.title}`}>{t('title')}</h4>
          </div>
          {logos.map((Icon) => (
            <Icon key={`${Icon}`} className={styles.icon} />
          ))}
        </>
      )}
    </section>
  );
};

export default Logos;
