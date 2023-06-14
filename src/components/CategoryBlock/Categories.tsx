import React, { FC } from 'react';

import Link from 'next/link';
import { Category } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { parseString } from '@/utils/utils';

interface CategoriesProps {
  categories: Category[];
  type: 'home' | 'controls';
  currentCategory?: string;
}

const Categories: FC<CategoriesProps> = ({ categories, type, currentCategory }) => {
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
              <h3 className={sen.className}>{title}</h3>
              {!category && <p className="body-s">{description}</p>}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
