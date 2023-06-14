import React, { FC, ReactNode, HTMLAttributes } from 'react';

import '../../app/globals.scss';
import styles from './styled.module.scss';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  buttonType?: 'primary' | 'link';
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ type, children, buttonType = 'primary' }, props) => {
  if (buttonType === 'primary') {
    return (
      <button type={type || 'button'} className={styles.button} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" className={`body-s ${styles.link__button}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
