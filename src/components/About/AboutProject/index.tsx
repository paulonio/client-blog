import React, { FC } from 'react';
import { AboutContentType } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AboutProjectProps {
  content: AboutContentType;
}

const AboutProject: FC<AboutProjectProps> = ({ content }) => {
  const { title, subtitle, body, urlToImage } = content;

  return (
    <section className={styles.wrapper}>
      <div>
        <img src={urlToImage} alt="About project" />
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={sen.className}>{title}</h2>
        <h4 className={sen.className}>{subtitle}</h4>
        <p className="body-s">{body}</p>
      </div>
    </section>
  );
};

export default AboutProject;
