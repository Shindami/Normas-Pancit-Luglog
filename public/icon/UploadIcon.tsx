import * as React from 'react';
const UploadIcon = ({ width = 47, height = 47, fill = 'none', ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={fill}
    {...rest}
  >
    <path
      fill='#919295'
      d='M7.833 9.792H33.29V23.5h3.917V9.792a3.92 3.92 0 0 0-3.917-3.917H7.833a3.92 3.92 0 0 0-3.917 3.917v23.5a3.92 3.92 0 0 0 3.917 3.916h15.666v-3.916H7.833v-23.5Z'
    />
    <path
      fill='#919295'
      d='m15.666 21.542-5.875 7.833h21.542l-7.834-11.75-5.875 7.833-1.958-3.916Z'
    />
    <path
      fill='#919295'
      d='M37.208 27.417H33.29v5.875h-5.875v3.916h5.875v5.875h3.917v-5.875h5.875v-3.916h-5.875v-5.875Z'
    />
  </svg>
);
export default UploadIcon;
