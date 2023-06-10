import React, { FC } from 'react';

import styles from './styled.module.scss';
import type { User } from '@/types/types';

interface ProfileProps {
  profile: User;
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const { fullName, urlToAvatar, city, country } = profile;

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={urlToAvatar} alt={fullName} />
      </div>
      <div>
        <h4>{fullName}</h4>
        <p className="body-s">
          {city}, {country}
        </p>
      </div>
    </div>
  );
};

export default Profile;
