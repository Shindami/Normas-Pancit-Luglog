import React from 'react';

const LinkRightArrow = ({ stroke = 'black' }: { stroke?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-move-right'
    >
      <path d='M18 8L22 12L18 16' />
      <path d='M2 12H22' />
    </svg>
  );
};

export default LinkRightArrow;
