import React, { FC } from 'react';
import { MissionType } from '@/constants/constants';

import { sen } from '@/styles/fonts';
import styles from './styled.module.scss';

interface MissionProps {
  mission: MissionType;
}

const Mission: FC<MissionProps> = ({ mission }) => {
  const { rubric, title, body } = mission;

  return (
    <div className={styles.about__item}>
      <p className={styles.about__title}>{rubric}</p>
      <div className={styles.about__content}>
        <h3 className={sen.className}>{title}</h3>
        <p className="body-s">{body}</p>
      </div>
    </div>
  );
};

export default Mission;
