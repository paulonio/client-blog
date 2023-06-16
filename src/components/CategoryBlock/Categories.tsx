import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Category } from '@/types/types';
import { sen } from '@/styles/fonts';

import { parseString, stringToKey } from '@/utils/utils';
import styles from './styled.module.scss';

interface CategoriesProps {
  categories: Category[];
  type: 'home' | 'controls';
  currentCategory?: string;
}

const Categories: FC<CategoriesProps> = ({ categories, type, currentCategory }) => {
  const { t } = useTranslation(['category', 'common']);

  return (
    <div className={`${styles.categories__wrapper} ${styles[type]}`}>
      {categories.map(({ title, description, Icon }) => {
        const category = currentCategory && parseString(currentCategory);
        const isActive = parseString(title) === category ? styles.active : '';
        return (
          <Link key={`${Icon}`} className={styles.link} href={`/${parseString(title)}`}>
            <div className={`${styles.category__wrapper} ${isActive}  ${styles[type]}`}>
              <div className={`${styles.icon__wrapper} ${styles[type]}`}>
                <Icon />
              </div>
              <h3 className={sen.className}>{t(stringToKey(title), { ns: 'common' })}</h3>
              {!category && <p className="body-s">{t(stringToKey(description))}</p>}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
