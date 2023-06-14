import { useState, useMemo } from 'react';

import { POSTS } from '@/constants/posts';

import { getPostsByPage } from '@/utils/utils';

export const usePagination = () => {
  const [page, setPage] = useState<number>(0);
  const lastPage = Math.floor(POSTS.length / 5);
  const isPrevDisabled = page === 0;
  const isNextDisabled = page === lastPage;

  const posts = useMemo(() => getPostsByPage(POSTS, page), [page]);

  const handleNextClick = () => {
    if (page !== lastPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  return { posts, isPrevDisabled, isNextDisabled, handlePrevClick, handleNextClick };
};
