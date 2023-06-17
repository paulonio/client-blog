'use client';

import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Categories from '@/components/CategoryBlock/Categories';
import CategoryTags from './CategoryTags';
import Posts from '@/components/BlogPosts/Posts';

import { useCategoryControls } from '@/hooks/useCategoryControls';

import { CATEGORY_ITEMS } from '@/constants/constants';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

interface CategoryControlsProps {
  currentCategory: string;
}

const CategoryControls: FC<CategoryControlsProps> = ({ currentCategory }) => {
  const { t } = useTranslation(['category', 'blog']);
  const {
    activeTags,
    filteredTags,
    filteredPostsByTags,
    handleTagClick,
    searchValue,
    handleSearchChange,
  } = useCategoryControls(currentCategory);

  return (
    <section className={styles.wrapper}>
      <div className={styles.posts__wrapper}>
        <Posts posts={filteredPostsByTags} />
      </div>
      <div>
        <div className={styles.search__bar}>
          <input
            className={`${styles.input} ${sen.className}`}
            type="text"
            placeholder={t('search-tag')}
            value={searchValue}
            onChange={handleSearchChange}
            data-testid="search-input"
          />
          <button className={`${styles.button} ${sen.className}`} type="button">
            {t('search')}
          </button>
          {searchValue && (
            <div className={styles.results}>
              {filteredTags.length > 0 ? (
                filteredTags.map((tag) => (
                  <div
                    key={tag}
                    className={styles.results__item}
                    data-tag={tag}
                    onClick={handleTagClick}
                    aria-hidden
                    data-testid="true-result"
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <div data-testid="result">{t('no-result', { ns: 'blog' })}</div>
              )}
            </div>
          )}
        </div>
        <div className={styles.categories__wrapper}>
          <h2 className={sen.className}>{t('categories')}</h2>
          <Categories
            type="controls"
            currentCategory={currentCategory}
            categories={CATEGORY_ITEMS}
          />
        </div>
        <div className={styles.tags__wrapper}>
          <h2 className={sen.className}>{t('all-tags')}</h2>
          <CategoryTags active={activeTags} onClick={handleTagClick} />
        </div>
      </div>
    </section>
  );
};

export default CategoryControls;
