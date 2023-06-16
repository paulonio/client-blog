import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

import Category from '@/components/Category';
import CategoryControls from '@/components/Category/CategoryControls';

const CategoryPage = () => {
  const { category } = useRouter().query;
  if (typeof category !== 'string') {
    return null;
  }

  return (
    <>
      <Category category={category} />
      <div className="container">
        <CategoryControls currentCategory={category} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        ['common', 'header', 'footer', 'blog', 'category'],
        null,
        ['en', 'ru']
      )),
    },
  };
};

export default CategoryPage;
