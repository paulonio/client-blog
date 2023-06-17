'use client';

import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Socials from '@/components/Socials';
import Loader from '@/components/Loader';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { parseString, stringToKey } from '@/utils/utils';
import { Author } from '@/types/types';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';

interface AuthorsProps {
  authors: Author[];
}

const Authors: FC<AuthorsProps> = ({ authors }) => {
  const ref = useRef<HTMLElement | null>(null);
  const { isShowing, isLoading } = useIntersectionObserver(ref);
  const { t } = useTranslation(['authors', 'common']);

  return (
    <section ref={ref} className={styles.authors}>
      {isLoading && <Loader />}
      {isShowing && (
        <>
          <h2 className={sen.className}>{t('heading')}</h2>
          <div className={styles.authors__content}>
            {authors.map(({ fullName, urlToAvatar }) => {
              const path = parseString(fullName);
              return (
                <Link key={fullName} className={styles.author} href={`/about/${path}`}>
                  <div className={styles.author__image}>
                    <img src={urlToAvatar} alt={fullName} />
                  </div>
                  <div className={styles.author__bio}>
                    <h3 className={sen.className}>{t(stringToKey(fullName), { ns: 'common' })}</h3>
                    <p className="body-l">
                      {t('occupation')} @{t('company')}
                    </p>
                  </div>
                  <Socials theme="dark" />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Authors;
