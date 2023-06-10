import React from 'react';
import { CATEGORY_TAGS } from '@/constants/constants';

import styles from './styled.module.scss';

const CategoryTags = () => {
  return (
    <div className={styles.tags__wrapper}>
      {CATEGORY_TAGS.map((tag) => (
        <button className={styles.tag__wrapper} type="button">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;
