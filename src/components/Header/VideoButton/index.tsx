'use client';

import React, { FC, ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';

import styles from './styled.module.scss';

interface VideoButtonProps {
  children: ReactNode;
}

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });

const VideoButton: FC<VideoButtonProps> = ({ children }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleModalOpen = () => {
    setActive(true);
  };

  const handleModalClose = () => {
    setActive(false);
  };

  return (
    <>
      <button type="button" className={styles.button} onClick={handleModalOpen}>
        {children}
      </button>
      <Modal isActive={isActive} handleClose={handleModalClose}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/R5Q7Xkz5tq8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Modal>
    </>
  );
};

export default VideoButton;
