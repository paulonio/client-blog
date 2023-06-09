import React, { FC, SVGProps } from 'react';

const NextIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      {...props}
    >
      <path d="M18 31C17.4477 31 17 31.4477 17 32C17 32.5523 17.4477 33 18 33V31ZM44.7071 32.7071C45.0976 32.3166 45.0976 31.6834 44.7071 31.2929L38.3431 24.9289C37.9526 24.5384 37.3195 24.5384 36.9289 24.9289C36.5384 25.3195 36.5384 25.9526 36.9289 26.3431L42.5858 32L36.9289 37.6569C36.5384 38.0474 36.5384 38.6805 36.9289 39.0711C37.3195 39.4616 37.9526 39.4616 38.3431 39.0711L44.7071 32.7071ZM18 33H44V31H18V33Z" />
    </svg>
  );
};

export default NextIcon;
