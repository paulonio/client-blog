'use client';

import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import CrossIcon from '@/icons/CrossIcon';

import styles from './styled.module.scss';

interface ModalProps {
  isActive: boolean;
  children: ReactNode;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ isActive, children, handleClose }) => {
  return (
    <>
      {createPortal(
        <div
          className={`${styles.overlay} ${isActive ? styles.overlay__active : ''}`}
          onClick={handleClose}
          aria-hidden
        >
          <div className={`${styles.modal} ${isActive ? styles.modal__active : ''}`}>
            <button className={styles['close-button']} type="button" onClick={handleClose}>
              <CrossIcon />
            </button>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
