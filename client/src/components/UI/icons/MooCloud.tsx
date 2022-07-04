import { FC } from 'react';


const MoonCloud: FC = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='url(#paint0_linear_1_3)' />
      <defs>
        <linearGradient
          id='paint0_linear_1_3'
          x1='12'
          y1='0'
          x2='12'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD800' />
          <stop offset='1'stopColor='#FF6B00' stopOpacity='0.64' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MoonCloud;
