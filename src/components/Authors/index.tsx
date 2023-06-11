import React, { FC } from 'react';
import Link from 'next/link';
import { sen } from '@/styles/fonts';
import { Author } from '@/types/types';

import Socials from '@/components/Socials';

import styles from './styled.module.scss';
import { parseName } from '@/utils/utils';

interface AuthorsProps {
  authors: Author[];
}

const Authors: FC<AuthorsProps> = ({ authors }) => {
  return (
    <section className={styles.authors}>
      <h2 className={sen.className}>List of Authors</h2>
      <div className={styles.authors__content}>
        {authors.map(({ fullName, occupation, company, urlToAvatar }) => {
          const path = parseName(fullName);
          return (
            <Link key={fullName} className={styles.author} href={`/authors/${path}`}>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Authors;
