import React, { FC } from 'react';

import { Category } from '@/types/types';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface CategoriesProps {
  categories: Category[];
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories__wrapper}>
      {categories.map(({ title, description, Icon }) => (
        <div key={`${Icon}`} className={styles.category__wrapper}>
          <div className={styles.icon__wrapper}>
            <Icon />
          </div>
          <h3 className={sen.className}>{title}</h3>
          <p className="body-s">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
