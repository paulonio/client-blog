import React, { FC, MouseEvent } from 'react';
import { useTranslation } from 'next-i18next';

import { CATEGORY_TAGS } from '@/constants/constants';

import styles from './styled.module.scss';
import { stringToKey } from '@/utils/utils';

interface CategorTagsProps {
  active: string[];
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const CategoryTags: FC<CategorTagsProps> = ({ active, onClick }) => {
  const { t } = useTranslation('category');
  return (
    <div className={styles.tags__wrapper}>
      {CATEGORY_TAGS.map((tag) => (
        <button
          key={tag}
          className={`${styles.tag__wrapper} ${active.includes(tag) ? styles.active : ''}`}
          onClick={onClick}
          type="button"
          data-tag={tag}
        >
          {t(stringToKey(tag))}
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;
