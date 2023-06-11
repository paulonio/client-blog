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
  if (!currentCategory) {
    return (
      <div className={`${styles.categories__wrapper} ${styles[type]}`}>
        {categories.map(({ title, description, Icon }) => (
          <Link key={`${Icon}`} href={`/${parseString(title)}`}>
            <div className={`${styles.category__wrapper} ${styles[type]}`}>
              <div className={`${styles.icon__wrapper} ${styles[type]}`}>
                <Icon />
              </div>
              <h3 className={sen.className}>{title}</h3>
              <p className="body-s">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`${styles.categories__wrapper} ${styles[type]}`}>
      {categories.map(({ title, Icon }) => {
        const category = parseString(currentCategory);
        const isActive = parseString(title) === category ? styles.active : '';
        return (
          <div
            key={`${Icon}`}
            className={`${styles.category__wrapper} ${isActive}  ${styles[type]}`}
          >
            <div className={`${styles.icon__wrapper} ${styles[type]}`}>
              <Icon />
            </div>
            <h3 className={sen.className}>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
