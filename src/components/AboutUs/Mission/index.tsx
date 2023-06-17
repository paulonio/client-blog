import React from 'react';
import { useTranslation } from 'next-i18next';

import { sen } from '@/styles/fonts';
import styles from '../styled.module.scss';

const Mission = () => {
  const { t } = useTranslation('mission');

  return (
    <div className={styles.about__item}>
      <p className={styles.about__title}>{t('header')}</p>
      <div className={styles.about__content}>
        <h3 className={sen.className}>{t('title')}</h3>
        <p className="body-s">{t('body')}</p>
      </div>
    </div>
  );
};

export default Mission;
