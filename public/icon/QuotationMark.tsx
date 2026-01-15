import React from 'react';

const QuotationMark = ({
  fill = '#000000',
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.0'
      width='16pt'
      height='14pt'
      viewBox='0 0 160.00000 140.000000'
      preserveAspectRatio='xMidYMid meet'
      className={className}
    >
      <g
        transform='translate(0.000000,140.000000) scale(0.100000,-0.100000)'
        fill={fill}
        stroke='none'
      >
        <path d='M560 1298 c-291 -170 -459 -366 -506 -588 -51 -243 81 -497 322 -619 34 -17 66 -31 71 -31 15 0 256 301 247 309 -5 4 -37 29 -70 54 -134 101 -232 243 -255 371 -20 111 17 240 100 343 37 48 117 119 159 142 13 8 14 12 3 25 -17 20 -28 19 -71 -6z' />
        <path d='M1414 1292 c-94 -52 -203 -134 -278 -208 -153 -152 -227 -307 -227 -476 0 -163 51 -281 170 -398 76 -75 208 -157 235 -147 7 3 66 71 132 152 l119 148 -29 21 c-132 95 -215 186 -269 296 -30 61 -32 71 -32 175 0 99 3 116 27 169 39 81 91 149 155 201 30 25 61 49 69 53 17 9 9 42 -10 42 -6 0 -34 -13 -62 -28z' />
      </g>
    </svg>
  );
};

export default QuotationMark;
