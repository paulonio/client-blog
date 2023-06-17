'useClient';

import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

import AuthorsHeading from '@/components/Authors/AuthorHeading';
import AuthorPosts from '@/components/Authors/AuthorPosts';
import ErrorBoundary from '@/components/ErrorBoundary';

import { getAuthorsPosts, getCurrentAuthor } from '@/utils/utils';

const AuthorPage = () => {
  const { author } = useRouter().query;
  const currentAuthor = useMemo(() => getCurrentAuthor(author), [author]);
  const authorsPosts = useMemo(() => getAuthorsPosts(author), [author]);

  return (
    <ErrorBoundary>
      {currentAuthor && <AuthorsHeading author={currentAuthor} />}
      {authorsPosts && <AuthorPosts posts={authorsPosts} />}
      <div className="container" />
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'blog',
      'footer',
      'header',
      'common',
      'authors',
    ])),
  },
});

export default AuthorPage;
