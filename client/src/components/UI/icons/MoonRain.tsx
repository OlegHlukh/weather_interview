import {FC} from 'react';

const MoonRain: FC = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 43 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.6083 1.43741C13.6939 1.38424 12.759 1.43564 11.8177 1.60161C5.29096 2.75245 0.932939 8.97635 2.08378 15.5031C3.23462 22.0298 9.45852 26.3878 15.9852 25.237C19.6363 24.5932 22.6087 22.3619 24.3178 19.3782C18.8919 19.0627 14.1917 15.0655 13.2069 9.48007C12.6998 6.60439 13.2622 3.7875 14.6083 1.43741Z'
        fill='url(#paint0_linear_5_0)'
      />
      <ellipse cx='21' cy='39' rx='13' ry='1' fill='#ECECEC' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M37.9531 17.0753C37.4901 12.5391 33.6584 9 29 9C24.5237 9 20.8107 12.2679 20.1165 16.5481C19.316 16.1957 18.4308 16 17.5 16C13.9101 16 11 18.9102 11 22.5C11 22.5854 11.0016 22.6704 11.0049 22.755C11.0016 22.8363 11 22.9179 11 23C11 26.3137 13.6863 29 17 29H17.5H37C40.3137 29 43 26.3137 43 23C43 20.0106 40.8138 17.5319 37.9531 17.0753Z'
        fill='url(#paint1_linear_5_0)'
        fillOpacity='0.7'
      />
      <rect
        width='1'
        height='6'
        rx='0.5'
        transform='matrix(1 0 0 -1 24 34)'
        fill='#90D0FF'
      />
      <rect
        width='1'
        height='6'
        rx='0.5'
        transform='matrix(1 0 0 -1 29 31)'
        fill='#90D0FF'
      />
      <rect
        width='1'
        height='6'
        rx='0.5'
        transform='matrix(1 0 0 -1 34 27)'
        fill='#90D0FF'
      />
      <defs>
        <linearGradient
          id='paint0_linear_5_0'
          x1='10.4504'
          y1='1.84269'
          x2='14.618'
          y2='25.4781'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#676767' stopOpacity='0.47' />
          <stop offset='1' stopColor='#6C6C6C' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5_0'
          x1='27'
          y1='17'
          x2='27'
          y2='29'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#C4C4C4' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MoonRain;
