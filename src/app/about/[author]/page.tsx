'useClient';

import React, { FC, useMemo } from 'react';

import AuthorsHeading from '@/components/Authors/AuthorHeading';
import AuthorPosts from '@/components/Authors/AuthorPosts';

import { getAuthorsPosts, getCurrentAuthor } from '@/utils/utils';

interface AutorProps {
  params: { author: string };
}

const AuthorPage: FC<AutorProps> = ({ params }) => {
  const { author } = params;
  const currentAuthor = useMemo(() => getCurrentAuthor(author), [author]);
  const authorsPosts = useMemo(() => getAuthorsPosts(author), [author]);

  return (
    <>
      <AuthorsHeading author={currentAuthor} />
      <AuthorPosts posts={authorsPosts} />
      <div className="container" />
    </>
  );
};

export default AuthorPage;
