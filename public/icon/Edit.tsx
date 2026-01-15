import * as React from 'react';
const EditIcon = ({ width = 18, height = 20, fill = 'none', ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={fill}
    {...rest}
  >
    <path
      fill={fill}
      d='M17.574 3.826 14.04.293a1 1 0 0 0-1.408-.006L3.963 8.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L.867 16h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42ZM8.205 11.66l-2.12-2.12 7.242-7.13 2.12 2.12-7.242 7.13ZM.867 18h16v2h-16v-2Z'
    />
  </svg>
);
export default EditIcon;
