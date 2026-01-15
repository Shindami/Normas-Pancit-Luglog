import React from 'react';

const SquarePanelRight = ({ stroke = 'var(--primary)', ...rest }) => {
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
      className='lucide lucide-panel-right'
      {...rest}
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M15 3v18' />
    </svg>
  );
};

export default SquarePanelRight;
