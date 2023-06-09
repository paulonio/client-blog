import React, { FC, SVGProps } from 'react';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface LogosProps {
  logos: FC<SVGProps<SVGSVGElement>>[];
}

const Logos: FC<LogosProps> = ({ logos }) => {
  return (
    <section className={styles.logos}>
      <div>
        <p className={`${styles.subtitle} body-l`}>We are</p>
        <h4 className={`${sen.className} ${styles.title}`}>Featured in</h4>
      </div>
      {logos.map((Icon) => (
        <Icon className={styles.icon} />
      ))}
    </section>
  );
};

export default Logos;
