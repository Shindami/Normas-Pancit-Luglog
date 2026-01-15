import React from 'react';

const FullScreen = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className='cursor-pointer'
    >
      <path
        d='M13.3633 9.60658L11.8609 11.109L9.61407 8.86212L8.61249 9.86371L10.8593 12.1105L9.35695 13.6129H13.3633V9.60658ZM0.613281 4.86925L2.11566 3.36687L4.36249 5.61371L5.36407 4.61212L3.11724 2.36529L4.61961 0.862915H0.613281V4.86925ZM13.3633 0.862915H9.35695L10.8593 2.36529L8.61249 4.61212L9.61407 5.61371L11.8609 3.36687L13.3633 4.86925V0.862915ZM0.613281 13.6129H4.61961L3.11724 12.1105L5.36407 9.86371L4.36249 8.86212L2.11566 11.109L0.613281 9.60658V13.6129Z'
        fill='black'
      />
    </svg>
  );
};

export default FullScreen;
