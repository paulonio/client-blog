'use client';

import React, { FC } from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';

import Categories from '@/components/CategoryBlock/Categories';
import CategoryTags from './CategoryTags';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import Posts from '@/components/BlogPosts/Posts';
import { useCategoryControls } from '@/hooks/useCategoryControls';

interface CategoryControlsProps {
  currentCategory: string;
}

const CategoryControls: FC<CategoryControlsProps> = ({ currentCategory }) => {
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
            placeholder="Search for tag..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button className={`${styles.button} ${sen.className}`} type="button">
            Search
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
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <div>No result</div>
              )}
            </div>
          )}
        </div>
        <div className={styles.categories__wrapper}>
          <h2 className={sen.className}>Categories</h2>
          <Categories
            type="controls"
            currentCategory={currentCategory}
            categories={CATEGORY_ITEMS}
          />
        </div>
        <div className={styles.tags__wrapper}>
          <h2 className={sen.className}>All Tags</h2>
          <CategoryTags active={activeTags} onClick={handleTagClick} />
        </div>
      </div>
    </section>
  );
};

export default CategoryControls;
