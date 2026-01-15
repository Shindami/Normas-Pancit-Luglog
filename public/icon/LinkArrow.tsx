import React from 'react';

const LinkArrow = ({ pathColor = '#000' }: { pathColor?: string }) => {
  return (
    <svg
      width='11'
      height='11'
      viewBox='0 0 12 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.02444 3.03922L0.459665 8.92697L1.68807 10.5053L9.25284 4.61752L8.5018 10.6421L10.4861 10.8895L11.6595 1.4772L2.24722 0.303848L1.99985 2.28819L8.02444 3.03922Z'
        fill={pathColor}
      />
    </svg>
  );
};

export default LinkArrow;
