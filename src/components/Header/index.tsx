import React from 'react';

import Navigation from '@/components/Navigation';

import { ROUTES } from '@/constants/routes';

import styles from './styled.module.scss';
import VideoButton from './VideoButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <h1 className={styles.title}>Modsen Client Blog</h1>
        <div className={styles.right}>
          <nav>
            <Navigation links={ROUTES} />
          </nav>
          <VideoButton>Video about us</VideoButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
