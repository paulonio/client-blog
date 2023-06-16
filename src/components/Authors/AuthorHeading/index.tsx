import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Socials from '@/components/Socials';

import { Author } from '@/types/types';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';
import { stringToKey } from '@/utils/utils';

interface AuthorsHeadingProps {
  author: Author;
}

const AuthorsHeading: FC<AuthorsHeadingProps> = ({ author }) => {
  const { t } = useTranslation(['authors', 'blog', 'common']);
  const { fullName, urlToAvatar, bio } = author;

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.image}>
          <img src={urlToAvatar} alt={fullName} />
        </div>
        <div className={styles.heading__wrapper}>
          <h1 className={`${styles.title} ${sen.className}`}>
            {t('page.greeting', { name: t(stringToKey(fullName), { ns: 'common' }) })}
          </h1>
          <p className="body-s">{t(stringToKey(bio), { ns: 'blog' })}</p>
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
