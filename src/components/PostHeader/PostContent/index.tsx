import React from 'react';
import { useTranslation } from 'next-i18next';

import { sen } from '@/styles/fonts';

import styles from '../styled.module.scss';

const PostContent = () => {
  const { t } = useTranslation('blog');

  return (
    <section className={styles['single-post']}>
      <h2 className={sen.className}>{t('lorem-ipsum')}</h2>
      <p className="body-s">{t('body')}</p>
      <h2 className={sen.className}>{t('step-by-step-guide')}</h2>
      <p className="body-s">{t('body')}</p>
      <p className="body-s">{t('body')}</p>
      <ul>
        <li>
          <h4 className={sen.className}>{t('list.item-1')}</h4>
        </li>
        <li>
          <h4 className={sen.className}>{t('list.item-2')}</h4>
        </li>
        <li>
          <h4 className={sen.className}>{t('list.item-3')}</h4>
        </li>
      </ul>
      <p className="body-s">{t('body')}</p>
      <h2 className={sen.className}>{t('lorem-ipsum')}</h2>
      <p className="body-s">{t('body')}</p>
    </section>
  );
};

export default PostContent;
