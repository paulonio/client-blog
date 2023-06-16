import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './styled.module.scss';
import { PostType } from '@/types/types';
import { sen } from '@/styles/fonts';
import { stringToKey } from '@/utils/utils';

interface PostHeaderProps {
  post: PostType;
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const { t } = useTranslation(['common', 'blog']);
  const { urlToAvatar, username, date, category, title } = post;

  return (
    <section className={styles.post__title}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={urlToAvatar} alt={username} />
        </div>
        <div>
          <h4 className={styles.username}>{t(stringToKey(username))}</h4>
          <p className="body-s">
            {t('posted-on')} {t(stringToKey(date))}
          </p>
        </div>
      </div>
      <h1 className={styles.title}>{t(stringToKey(title), { ns: 'blog' })}</h1>
      <h4 className={sen.className}>{t(stringToKey(category))}</h4>
    </section>
  );
};

export default PostHeader;
