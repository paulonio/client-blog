import React from 'react';
import { useTranslation } from 'next-i18next';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Privacy = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <section className={styles.heading}>
        <h1 className={sen.className} data-testid="privacy-title">
          {t('heading.title')}
        </h1>
        <p data-testid="body">
          {t('heading.description.updated')} {t('heading.description.date')}
        </p>
      </section>
      <section className={styles.content__wrapper}>
        <h2 className={`${styles.content__heading} ${sen.className}`}>
          {t('privacy.first-paragraph.title')}
        </h2>
        <p className="body-s">{t('privacy.first-paragraph.body')}</p>
        <h2 className={sen.className}>{t('privacy.second-paragraph.title')}</h2>
        <p className="body-s">{t('privacy.second-paragraph.body')}</p>
      </section>
    </>
  );
};

export default Privacy;
