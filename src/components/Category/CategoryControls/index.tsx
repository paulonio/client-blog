import React from 'react';
import { CATEGORY_ITEMS } from '@/constants/constants';

import Categories from '@/components/CategoryBlock/Categories';
import CategoryTags from './CategoryTags';

import { sen } from '@/styles/fonts';
import { POSTS } from '@/constants/posts';

import styles from './styled.module.scss';
import Posts from '@/components/BlogPosts/Posts';

const posts = POSTS.slice(0, 4);

const CategoryControls = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.posts__wrapper}>
        <Posts posts={posts} />
      </div>
      <div>
        <div className={styles.search__bar}>
          <input
            className={`${styles.input} ${sen.className}`}
            type="text"
            placeholder="Search for tag..."
          />
          <button className={`${styles.button} ${sen.className}`} type="button">
            Search
          </button>
        </div>
        <div className={styles.categories__wrapper}>
          <h2 className={sen.className}>Categories</h2>
          <Categories type="controls" categories={CATEGORY_ITEMS} />
        </div>
        <div className={styles.tags__wrapper}>
          <h2 className={sen.className}>All Tags</h2>
          <CategoryTags />
        </div>
      </div>
    </section>
  );
};

export default CategoryControls;
