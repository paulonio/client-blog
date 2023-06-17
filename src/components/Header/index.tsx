import React from 'react';
import { useTranslation } from 'next-i18next';

import Navigation from '@/components/Navigation';

import { ROUTES } from '@/constants/routes';

import styles from './styled.module.scss';
import VideoButton from './VideoButton';
import Burger from '../Burger';

const Header = () => {
  const { t } = useTranslation('header');

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.right}>
          <nav>
            <Navigation links={ROUTES} />
          </nav>
          <VideoButton>{t('video')}</VideoButton>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
