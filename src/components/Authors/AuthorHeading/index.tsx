import React, { FC } from 'react';
import Socials from '@/components/Socials';
import { Author } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface AuthorsHeadingProps {
  author: Author;
}

const AuthorsHeading: FC<AuthorsHeadingProps> = ({ author }) => {
  const { fullName, urlToAvatar, bio } = author;

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.image}>
          <img src={urlToAvatar} alt={fullName} />
        </div>
        <div className={styles.heading__wrapper}>
          <h1 className={`${styles.title} ${sen.className}`}>
            Hey there, I’m {fullName} and welcome to my Blog
          </h1>
          <p className="body-s">{bio}</p>
          <Socials theme="dark" />
        </div>
      </div>
      <div className={styles.patterns__wrapper}>
        <div className={styles.pattern__left} />
        <div className={styles.pattern__right} />
      </div>
    </section>
  );
};

export default AuthorsHeading;
