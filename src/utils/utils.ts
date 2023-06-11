import { POSTS } from '@/constants/posts';

export const parseName = (capitalized: string) => {
  return capitalized.toLocaleLowerCase().split(' ').join('-');
};

export const getPost = (id: string) => {
  const [currentPost] = POSTS.filter((post) => post.id === id);

  console.log(currentPost);

  return currentPost;
};
