import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';

import { parseString } from '@/utils/utils';
import { inter } from '@/styles/fonts';

import styles from './styled.module.scss';

export interface LinkType {
  href: string;
  text: string;
}

interface NavigationProps {
  links: LinkType[];
  onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ links, onClick }) => {
  const { t } = useTranslation('header');

  return (
    <ul className={styles.navigation}>
      {links.map(({ href, text }) => (
        <li key={href} className={`${styles.navigation__link} ${inter.className}`}>
          <Trans i18nKey="nav">
            <Link href={href} onClick={onClick}>
              {t(parseString(text))}
            </Link>
          </Trans>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
