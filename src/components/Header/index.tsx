import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navigation from '@/components/Navigation';

import { ROUTES } from '@/constants/routes';

import styles from './styled.module.scss';
import VideoButton from './VideoButton';
import Burger from '../Burger';

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('header');

  const changeTo = router.locale === 'en' ? 'ru' : 'en';
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        {/* <h1 className={styles.title}>Modsen Client Blog</h1> */}
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.right}>
          <nav>
            <Navigation links={ROUTES} />
          </nav>
          <Link href="/" locale={changeTo}>
            <button>{t('change', { changeTo })}</button>
          </Link>
          <VideoButton>{t('video')}</VideoButton>
          <Burger />
        </div>
      </div>
    </header>
  );
  // return (
  //   <header className={styles.header}>
  //     <div className={`container ${styles.header__wrapper}`}>
  //       {/* <h1 className={styles.title}>Modsen Client Blog</h1> */}
  //       <h1 className={styles.title}>{t('h1')}</h1>
  //       <div className={styles.right}>
  //         <nav>
  //           <Navigation links={ROUTES} />
  //         </nav>
  //         <Link href="/" locale={changeTo}>
  //           <button>{t('change-locale', { changeTo })}</button>
  //         </Link>
  //         <VideoButton>Video about us</VideoButton>
  //         <Burger />
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
