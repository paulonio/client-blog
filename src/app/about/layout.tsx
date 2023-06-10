import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default layout;
