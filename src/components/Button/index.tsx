import React, { FC, ReactNode } from 'react';

import styles from './styled.module.scss';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
