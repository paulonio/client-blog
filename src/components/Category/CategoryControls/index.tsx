'use client';

import React, { ChangeEvent, FC, MouseEvent, useMemo, useState } from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';

import Categories from '@/components/CategoryBlock/Categories';
import CategoryTags from './CategoryTags';

import { sen } from '@/styles/fonts';
import { POSTS } from '@/constants/posts';

import styles from './styled.module.scss';
import Posts from '@/components/BlogPosts/Posts';
import { deleteTag, getFilteredPosts, getResults } from '@/utils/utils';

interface CategoryControlsProps {
  currentCategory: string;
}

const CategoryControls: FC<CategoryControlsProps> = ({ currentCategory }) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredTags = useMemo(() => getResults(searchValue), [searchValue]);
  const filteredPosts = useMemo(() => getFilteredPosts(POSTS, activeTags), [activeTags]);

  const handleTagClick = (e: MouseEvent<HTMLElement>) => {
    const tag = e.currentTarget.getAttribute('data-tag');
    if (tag && activeTags.includes(tag)) {
      setActiveTags(deleteTag(activeTags, tag));
    } else if (tag) {
      setActiveTags([...activeTags, tag]);
    }
    setSearchValue('');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.posts__wrapper}>
        <Posts posts={filteredPosts} />
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
