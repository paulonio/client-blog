import React, { FC } from 'react';
import { sen } from '@/styles/fonts';
import { PrivacyType } from '@/types/types';

import styles from './styled.module.scss';

interface PrivacyProps {
  privacy: PrivacyType;
}

const Privacy: FC<PrivacyProps> = ({ privacy }) => {
  const { lastUpdated, content } = privacy;

  return (
    <>
      <section className={styles.heading}>
        <h1 className={sen.className}>Privacy Policy</h1>
        <p>Last Updated on {lastUpdated}</p>
      </section>
      <section className={styles.content__wrapper}>
        <h2 className={`${styles.content__heading} ${sen.className}`}>
          Lorem ipsum dolor sit amet
        </h2>
        <p className="body-s">{content}</p>
        <h2 className={sen.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h2>
        <p className="body-s">{content}</p>
      </section>
    </>
  );
};

export default Privacy;
