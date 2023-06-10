import React, { FC } from 'react';
import { AboutContentType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AboutTeamProps {
  content: AboutContentType;
}

const AboutTeam: FC<AboutTeamProps> = ({ content }) => {
  const { title, subtitle, body, urlToImage } = content;

  return (
    <section className={styles.wrapper}>
      <div className={styles.content__wrapper}>
        <h2 className={sen.className}>{title}</h2>
        <h4 className={sen.className}>{subtitle}</h4>
        <p className="body-s">{body}</p>
      </div>
      <div>
        <img src={urlToImage} alt="About team" />
      </div>
    </section>
  );
};

export default AboutTeam;
