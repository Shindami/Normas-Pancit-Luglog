import React from 'react';

const CircleArrowRight = ({ size = '60', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='#FFFFFF '
      stroke='#D4D4D4'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path stroke='#303030' d='m11 9 3 3-3 3' />
    </svg>
  );
};

export default CircleArrowRight;
