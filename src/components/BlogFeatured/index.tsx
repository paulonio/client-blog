import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';
import { POSTS } from '@/constants/posts';

const post = POSTS[1];

const BlogFeatured = () => {
  const { id, username, date, title, body, urlToImage } = post;

  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blog__wrapper}>
          <div className={styles.blog__featured}>
            <h5>FEATURED POST</h5>
            <h2 className={sen.className}>{title}</h2>
            <p className="body-l">
              By <span className={styles.name}>{username}</span> | {date}
            </p>
            <p className="body-s">{body}</p>
            <Link href={`/blog/${id}`}>
              <Button>Read More {'>'}</Button>
            </Link>
          </div>
          <div>
            <img src={urlToImage} alt={username} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
