import {FC} from 'react';

import * as S from './sunCloud.styled';

const SunCloud: FC = () => {
  return (
    <S.Icon
      width='100%'
      height='100%'
      viewBox='0 0 39 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <S.IconCircle cx='12' cy='12' r='12' fill='url(#paint0_linear_2_51)' />
      <S.IconPath
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5 27H13C9.68629 27 7 24.3137 7 21C7 20.9179 7.00165 20.8363 7.00491 20.755C7.00165 20.6704 7 20.5854 7 20.5C7 16.9101 9.91015 14 13.5 14C14.4308 14 15.316 14.1957 16.1165 14.5481C16.8107 10.2679 20.5237 7 25 7C29.6584 7 33.4901 10.5391 33.9531 15.0753C36.8138 15.5319 39 18.0106 39 21C39 24.3137 36.3137 27 33 27H13.5Z'
        fill='url(#paint1_linear_2_51)'
        fillOpacity='0.8'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2_51'
          x1='12'
          y1='0'
          x2='12'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD800' />
          <stop offset='1' stopColor='#FF6B00' stopOpacity='0.64' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_2_51'
          x1='23'
          y1='15'
          x2='23'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0094FF' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
      </defs>
    </S.Icon>
  );
};

export default SunCloud;
