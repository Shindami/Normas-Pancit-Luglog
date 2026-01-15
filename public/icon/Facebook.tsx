import * as React from 'react';
const FacebookIcon = ({ width = 21, height = 21, fill = 'none', ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={fill}
    {...rest}
  >
    <path
      fill='#000'
      d='M20.934 10.102c0-5.556-4.478-10.061-10-10.061-5.523 0-10 4.505-10 10.061 0 5.022 3.656 9.184 8.437 9.939v-7.03H6.832v-2.909h2.54V7.886c0-2.522 1.492-3.915 3.776-3.915 1.094 0 2.239.197 2.239.197v2.476h-1.261c-1.242 0-1.63.775-1.63 1.57v1.888h2.774l-.444 2.908h-2.33v7.031c4.78-.755 8.438-4.917 8.438-9.939Z'
    />
  </svg>
);
export default FacebookIcon;
