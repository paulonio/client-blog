import { useState, useMemo, MouseEvent, ChangeEvent } from 'react';

import { POSTS } from '@/constants/posts';

import { getResults, getFilteredPostsByCategory, getFilteredPosts, deleteTag } from '@/utils/utils';

export const useCategoryControls = (currentCategory: string) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredTags = useMemo(() => getResults(searchValue), [searchValue]);
  const filteredPostsByCategory = useMemo(
    () => getFilteredPostsByCategory(POSTS, currentCategory),
    [currentCategory]
  );
  const filteredPostsByTags = useMemo(
    () => getFilteredPosts(filteredPostsByCategory, activeTags),
    [activeTags]
  );

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

  return {
    activeTags,
    filteredTags,
    filteredPostsByTags,
    handleTagClick,
    searchValue,
    handleSearchChange,
  };
};
