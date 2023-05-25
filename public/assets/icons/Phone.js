import * as React from 'react';
const Phone = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={50}
    height={50}
    viewBox='0 0 255.99 255.99'
    fill='#a7a7a7'
    {...props}
  >
    <path
      fill={props.fill}
      strokeMiterlimit={10}
      d='M14 3.99c-5.511 0-10 4.489-10 10v22c0 5.512 4.489 10 10 10h22c5.511 0 10-4.488 10-10v-22c0-5.511-4.489-10-10-10zm4.006 8.043c.628.027 1.205.381 1.553.924l1.81 2.828c.73 1.141.781 2.615.129 3.805l-1.465 2.084a1.996 1.996 0 0 0-.209 1.922c.414.99 1.217 2.511 2.643 3.937a12.396 12.396 0 0 0 3.937 2.643 1.996 1.996 0 0 0 1.922-.21l2.084-1.464a3.755 3.755 0 0 1 3.805.129l2.828 1.81c.543.348.897.925.924 1.553.154 3.564-2.607 5.008-3.41 5.008-.556 0-7.24.76-14.78-6.78-7.539-7.538-6.779-14.223-6.779-14.779 0-.803 1.444-3.564 5.008-3.41z'
      fontFamily='none'
      fontSize='none'
      fontWeight='none'
      style={{
        mixBlendMode: 'normal',
      }}
      textAnchor='none'
      transform='scale(5.12)'
    />
  </svg>
)
export default Phone;
