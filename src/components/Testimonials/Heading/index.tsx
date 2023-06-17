import React from 'react';
import { useTranslation } from 'next-i18next';

import { sen } from '@/styles/fonts';

import styles from '../styled.module.scss';

const Heading = () => {
  const { t } = useTranslation('testimonials');

  return (
    <div className={styles.heading}>
      <h5>{t('heading')}</h5>
      <h2 className={sen.className}>{t('title')}</h2>
      <p className="body-s">{t('body')}</p>
    </div>
  );
};

export default Heading;
