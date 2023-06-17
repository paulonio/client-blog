import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { stringToKey } from '@/utils/utils';
import type { User } from '@/types/types';

import styles from '../styled.module.scss';

interface ProfileProps {
  profile: User;
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const { fullName, urlToAvatar, city, country } = profile;
  const { t } = useTranslation('common');

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={urlToAvatar} alt={fullName} />
      </div>
      <div>
        <h4>{t(stringToKey(fullName))}</h4>
        <p className="body-s">
          {t(stringToKey(city))}, {t(stringToKey(country))}
        </p>
      </div>
    </div>
  );
};

export default Profile;
