import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import { isLinkActive, parseString } from '@/utils/utils';
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
  const router = useRouter();
  const path = usePathname();

  const changeTo = router.locale === 'en' ? 'ru' : 'en';

  return (
    <ul className={styles.navigation}>
      {links.map(({ href, text }) => (
        <li key={href} className={`${styles.navigation__link} ${inter.className}`}>
          <Link
            href={href}
            className={`${isLinkActive(path, href) ? styles.active : ''}`}
            onClick={onClick}
          >
            {t(parseString(text))}
          </Link>
        </li>
      ))}
      <li className={`${styles.navigation__link} ${inter.className}`}>
        <Link href="/" locale={changeTo}>
          {t('change', { changeTo })}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
