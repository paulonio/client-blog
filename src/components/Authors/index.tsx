import React, { FC } from 'react';
import { sen } from '@/styles/fonts';
import { Author } from '@/types/types';

import Socials from '@/components/Socials';

import styles from './styled.module.scss';

interface AuthorsProps {
  authors: Author[];
}

const Authors: FC<AuthorsProps> = ({ authors }) => {
  return (
    <section className={styles.authors}>
      <h2 className={sen.className}>List of Authors</h2>
      <div className={styles.authors__content}>
        {authors.map(({ fullName, occupation, company, urlToAvatar }) => (
          <div key={fullName} className={styles.author}>
            <div className={styles.author__image}>
              <img src={urlToAvatar} alt={fullName} />
            </div>
            <div className={styles.author__bio}>
              <h3 className={sen.className}>{fullName}</h3>
              <p className="body-l">
                {occupation} @{company}
              </p>
            </div>
            <Socials theme="dark" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Authors;
