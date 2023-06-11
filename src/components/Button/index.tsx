import React, { FC, ReactNode, HTMLAttributes } from 'react';

import styles from './styled.module.scss';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ type, children }, props) => {
  const buttonType = type || 'button';

  return (
    <button type={buttonType} className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
