import React, { FC } from 'react';

import styles from './styled.module.scss';

interface PostImageProps {
  urlToImage: string;
  tag: string;
}

const PostImage: FC<PostImageProps> = ({ urlToImage, tag }) => {
  return (
    <section className={styles.image__wrapper}>
      <img src={urlToImage} alt={tag} />
    </section>
  );
};

export default PostImage;
