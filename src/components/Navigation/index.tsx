import React, { FC } from 'react';
import Link from 'next/link';

import { Inter } from 'next/font/google';
import styles from './styled.module.scss';

interface LinkType {
  href: string;
  text: string;
}

interface NavigationProps {
  links: LinkType[];
}

const inter = Inter({ weight: ['400'], subsets: ['latin'] });

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <ul className={styles.navigation}>
      {links.map(({ href, text }) => (
        <li key={href} className={`${styles.navigation__link} ${inter.className}`}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
