import React, { FC, useMemo } from 'react';
import AuthorsHeading from '@/components/Authors/AuthorHeading';
import { AUTHORS } from '@/constants/authors';
import AuthorPosts from '@/components/Authors/AuthorPosts';
import { parseName } from '@/utils/utils';

interface AutorProps {
  params: { author: string };
}

const AuthorPage: FC<AutorProps> = ({ params }) => {
  const { author } = params;
  const [data] = useMemo(
    () => AUTHORS.filter(({ fullName }) => parseName(fullName) === author),
    [author]
  );

  return (
    <>
      <AuthorsHeading author={data} />
      <AuthorPosts />
      <div className="container" />
    </>
  );
};

export default AuthorPage;
