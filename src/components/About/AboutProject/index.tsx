import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { AboutContentType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AboutProjectProps {
  content: AboutContentType;
}

const AboutProject: FC<AboutProjectProps> = ({ content }) => {
  const { urlToImage } = content;
  const { t } = useTranslation('about');

  return (
    <section className={styles.wrapper}>
      <div>
        <img src={urlToImage} alt="About project" />
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={sen.className}>{t('project.title')}</h2>
        <h4 className={sen.className}>{t('project.subtitle')}</h4>
        <p className="body-s">{t('project.body')}</p>
      </div>
    </section>
  );
};

export default AboutProject;
