import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { InfoType } from '@/types/types';

import styles from './styled.module.scss';
import { sen } from '@/styles/fonts';
import { stringToKey } from '@/utils/utils';

interface AboutProps {
  info: InfoType[];
}

const About: FC<AboutProps> = ({ info }) => {
  const { t } = useTranslation('about');

  return (
    <section className={styles.about}>
      <div className={styles.heading}>
        <div className={styles.about__title}>
          <h5>{t('header')}</h5>
          <h1>{t('title')}</h1>
        </div>
        <p className={`${styles.about__description} body-s`}>
          {t('body')} {t('second-part')}
        </p>
      </div>
      <div>
        <div className={styles.info}>
          {info.map(({ amount, description }) => (
            <div key={description} className={styles.info__item}>
              <p className={`${sen.className} display`}>{amount}</p>
              <p className="body-l">{t(stringToKey(description))}</p>
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
