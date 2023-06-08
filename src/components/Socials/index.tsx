import React, { FC } from 'react';

import FacebookIcon from '@/icons/FacebookIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import LinkledinIcon from '@/icons/LinkedinIcon';
import TwitterIcon from '@/icons/TwitterIcon';

import styles from './styled.module.scss';

interface SocialsProps {
  theme: 'dark' | 'light';
}

const isDark = (theme: 'dark' | 'light') => {
  return theme === 'dark';
};

const Socials: FC<SocialsProps> = ({ theme }) => {
  return (
    <ul className={styles.socials}>
      <li>
        <FacebookIcon className={isDark(theme) ? styles.dark : styles.light} />
      </li>
      <li>
        <TwitterIcon className={isDark(theme) ? styles.dark : styles.light} />
      </li>
      <li>
        <InstagramIcon className={isDark(theme) ? styles.dark : styles.light} />
      </li>
      <li>
        <LinkledinIcon className={isDark(theme) ? styles.dark : styles.light} />
      </li>
    </ul>
  );
};

export default Socials;
