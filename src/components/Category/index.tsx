import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { stringToKey } from '@/utils/utils';

interface CategoryProps {
  category: string;
}

const Category: FC<CategoryProps> = ({ category }) => {
  const { t } = useTranslation(['blog', 'common']);

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={`${sen.className} display`} data-testid="category">
          {t(stringToKey(category), { ns: 'common' })}
        </h1>
        <p className="body-s">{t('lorem-ipsum')}</p>
        <p className={`${styles.category} body-l`}>
          {t('blog')} {'>'} {t(stringToKey(category), { ns: 'common' })}
        </p>
      </div>
    </section>
  );
};

export default Category;
