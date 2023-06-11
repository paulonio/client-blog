import React, { FC, SVGProps } from 'react';

const SelectArrowIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      {...props}
    >
      <path d="M2 2L6 6L10 2" stroke="black" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
};

export default SelectArrowIcon;
