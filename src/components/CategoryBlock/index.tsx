import React from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const CategoryBlock = () => {
  return (
    <section className={styles.categories}>
      <h2 className={sen.className}>Choose A Category</h2>
      <div className={styles.categories__wrapper}>
        {CATEGORY_ITEMS.map(({ title, description, Icon }) => {
          return (
            <div className={styles.category__wrapper}>
              <div className={styles.icon__wrapper}>
                <Icon />
              </div>
              <h3 className={sen.className}>{title}</h3>
              <p className="body-s">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryBlock;
