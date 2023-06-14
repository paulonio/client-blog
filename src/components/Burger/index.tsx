'use client';

import React, { useState } from 'react';

import Navigation from '@/components/Navigation';

import { ROUTES } from '@/constants/routes';

import styles from './styled.module.scss';
import VideoButton from '../Header/VideoButton';

const Burger = () => {
  const [isBurgerActive, setBurgerActive] = useState<boolean>(false);

  const toggleBurger = () => {
    if (isBurgerActive) {
      setBurgerActive(false);
    } else {
      setBurgerActive(true);
    }
  };

  const handleMenuClose = () => {
    setBurgerActive(false);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isBurgerActive ? styles.overlay__active : ''}`}
        onClick={handleMenuClose}
        aria-hidden
      />
      <div
        className={`${styles.wrapper} ${isBurgerActive ? styles.wrapper__active : ''}`}
        onClick={toggleBurger}
        aria-hidden
      >
        <div className={styles.line} />
      </div>
      {isBurgerActive && (
        <div className={`${styles.menu} ${isBurgerActive ? styles.menu__active : ''}`}>
          <nav className={styles.navigation}>
            <Navigation links={ROUTES} onClick={handleMenuClose} />
          </nav>
          <VideoButton>Video about us</VideoButton>
        </div>
      )}
    </>
  );
};

export default Burger;
