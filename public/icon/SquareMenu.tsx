import React from 'react';

const SquareMenu = ({ stroke = 'var(--primary)', ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke={stroke}
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-square-menu'
      {...rest}
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M7 8h10' />
      <path d='M7 12h10' />
      <path d='M7 16h10' />
    </svg>
  );
};

export default SquareMenu;
