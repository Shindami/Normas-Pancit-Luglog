import * as React from 'react';
const ChangePasswordIcon = ({ size = '60', ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='svg-icon'
    style={{
      width: '25px',
      height: '25px',
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
    }}
    viewBox='0 0 1024 1024'
    {...props}
  >
    <path d='M288 416v-96a128 128 0 0 1 256 0v96h64v-96c0-106-86-192-192-192s-192 86-192 192v96zm224 288h-64v-64l384-384 64 64-384 384z' />
    <path d='M544 736H416V608l160-160H192a64.19 64.19 0 0 0-64 64v320a64.19 64.19 0 0 0 64 64h448a64.19 64.19 0 0 0 64-64V576z' />
  </svg>
);
export default ChangePasswordIcon;
