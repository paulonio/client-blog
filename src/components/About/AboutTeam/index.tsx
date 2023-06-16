import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { AboutContentType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AboutTeamProps {
  content: AboutContentType;
}

const AboutTeam: FC<AboutTeamProps> = ({ content }) => {
  const { urlToImage } = content;
  const { t } = useTranslation('about');

  return (
    <section className={styles.wrapper}>
      <div className={styles.content__wrapper}>
        <h2 className={sen.className}>{t('team.title')}</h2>
        <h4 className={sen.className}>{t('team.subtitle')}</h4>
        <p className="body-s">{t('team.body')}</p>
      </div>
      <div>
        <img src={urlToImage} alt="About team" />
      </div>
    </section>
  );
};

export default AboutTeam;
