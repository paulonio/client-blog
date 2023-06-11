import React, { FC, SVGProps } from 'react';

const CrossIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 20L4 4M20 4L4 20" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CrossIcon;
