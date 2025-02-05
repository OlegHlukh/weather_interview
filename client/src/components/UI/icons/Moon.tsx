import {FC} from 'react';

const Moon: FC = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.6083 0.777023C12.6939 0.723859 11.759 0.775251 10.8177 0.941221C4.29096 2.09206 -0.0670608 8.31596 1.08378 14.8427C2.23462 21.3694 8.45852 25.7274 14.9852 24.5766C18.6363 23.9328 21.6087 21.7015 23.3178 18.7178C17.8919 18.4023 13.1917 14.4051 12.2069 8.81968C11.6998 5.944 12.2622 3.12711 13.6083 0.777023Z'
        fill='url(#paint0_linear_3_6)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_3_6'
          x1='9.45043'
          y1='1.18231'
          x2='13.618'
          y2='24.8177'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#676767' stopOpacity='0.47' />
          <stop offset='1' stopColor='#6C6C6C' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Moon;
