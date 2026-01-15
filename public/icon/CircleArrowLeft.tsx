import React from 'react';

const CircleArrowLeft = ({ size = '60', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill='#ffffff'
      stroke='#D4D4D4'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle className='p-4' cx='12' cy='12' r='10' />
      <path stroke='#303030' d='m13 15-3-3 3-3' />
    </svg>
  );
};

export default CircleArrowLeft;
