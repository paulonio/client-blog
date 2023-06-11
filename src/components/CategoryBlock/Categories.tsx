import React, { FC } from 'react';

import Link from 'next/link';
import { Category } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface CategoriesProps {
  categories: Category[];
  type: 'home' | 'controls';
}

const Categories: FC<CategoriesProps> = ({ categories, type }) => {
  if (type === 'home') {
    return (
      <div className={`${styles.categories__wrapper} ${styles[type]}`}>
        {categories.map(({ title, description, Icon }) => (
          <Link key={`${Icon}`} href="/category">
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
      {categories.map(({ title, Icon }) => (
        <div key={`${Icon}`} className={`${styles.category__wrapper} ${styles[type]}`}>
          <div className={`${styles.icon__wrapper} ${styles[type]}`}>
            <Icon />
          </div>
          <h3 className={sen.className}>{title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
