import React from 'react';

const Close = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className='cursor-pointer'
    >
      <path
        d='M10.9326 0.840637L6.51276 5.25939L2.09401 0.840637L0.621094 2.31355L5.03984 6.7323L0.621094 11.1511L2.09401 12.624L6.51276 8.20522L10.9326 12.624L12.4055 11.1511L7.98672 6.7323L12.4055 2.31355L10.9326 0.840637Z'
        fill='black'
      />
    </svg>
  );
};

export default Close;
