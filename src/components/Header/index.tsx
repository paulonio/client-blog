import React from 'react';

import Navigation from '@/components/Navigation';

import { ROUTES } from '@/constants/routes';

import styles from './styled.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <h1 className={styles.title}>Modsen Client Blog</h1>
        <div className={styles.right}>
          <nav>
            <Navigation links={ROUTES} />
          </nav>
          <button type="button" className={styles.button}>
            Video about us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
