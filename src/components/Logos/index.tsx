'use client';

import React, { FC, SVGProps, useRef } from 'react';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LogosProps {
  logos: FC<SVGProps<SVGSVGElement>>[];
}

const Logos: FC<LogosProps> = ({ logos }) => {
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <section ref={ref} className={styles.logos}>
      {isIntersecting && (
        <>
          <div>
            <p className={`${styles.subtitle} body-l`}>We are</p>
            <h4 className={`${sen.className} ${styles.title}`}>Featured in</h4>
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
