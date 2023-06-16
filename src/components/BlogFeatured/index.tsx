import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Button from '../Button';

import { POSTS } from '@/constants/posts';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';
import { stringToKey } from '@/utils/utils';

const post = POSTS[1];

const BlogFeatured = () => {
  const { id, username, date, title, body, urlToImage } = post;
  const { t } = useTranslation(['blog', 'common']);

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blog__wrapper}>
          <div className={styles.blog__featured}>
            <h5>{t('heading.subtitle')}</h5>
            <h2 className={sen.className}>{t(stringToKey(title))}</h2>
            <p className="body-l">
              <span className={styles.name}>{t('heading.author')}</span> |{' '}
              {t(stringToKey(date), { ns: 'common' })}
            </p>
            <p className="body-s">{t(stringToKey(body))}</p>
            <Link href={`/blog/${id}`}>
              <Button>
                {t('heading.read')} {'>'}
              </Button>
            </Link>
          </div>
          <div>
            <img src={urlToImage} alt={username} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
