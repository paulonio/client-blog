import { AUTHORS } from '@/constants/authors';
import { CATEGORY_TAGS } from '@/constants/constants';
import { POSTS } from '@/constants/posts';
import { PostType } from '@/types/types';

export const parseString = (capitalized: string) => {
  return capitalized.toLocaleLowerCase().split(' ').join('-');
};

export const getPost = (id: string) => {
  const [currentPost] = POSTS.filter((post) => post.id === id);

  return currentPost;
};

export const getResults = (searchValue: string) => {
  const result = CATEGORY_TAGS.filter((tag) =>
    tag.toLowerCase().includes(searchValue.toLowerCase())
  );

  return result;
};

export const deleteTag = (activeTags: string[], tag: string) => {
  const newTags = activeTags.filter((activeTag) => activeTag !== tag);

  return newTags;
};

export const getFilteredPosts = (posts: PostType[], activeTags: string[]) => {
  const filterValue = activeTags.sort().join('').toLowerCase();
  const filteredPosts = posts.filter(({ tags }) =>
    tags.sort().join('').toLowerCase().includes(filterValue)
  );

  return filteredPosts;
};

export const getFilteredPostsByCategory = (posts: PostType[], currentCategory: string) => {
  const filteredPosts = posts.filter(
    ({ category }) => parseString(category) === parseString(currentCategory)
  );

  return filteredPosts;
};

export const getPostsByPage = (posts: PostType[], page: number) => {
  const start = page * 5;
  const newPosts = posts.slice(start, start + 5);

  return newPosts;
};

export const getCurrentAuthor = (author: string) => {
  const [filteredAuthor] = AUTHORS.filter(({ fullName }) => parseString(fullName) === author);

  return filteredAuthor;
};

export const getHeroPost = () => {
  const [heroPost] = POSTS.filter(({ category }) => category === 'Startup');

  return heroPost;
};
