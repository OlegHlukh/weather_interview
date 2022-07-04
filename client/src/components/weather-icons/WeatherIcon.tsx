import {FC, ReactNode} from 'react';

import * as S from './WeatherIcon.styled';

interface WeatherIconProps {
  icon: ReactNode;
  partOfDay: string;
}

const WeatherIcon: FC<WeatherIconProps> = ({icon, partOfDay}) => {
  return (
    <S.Root>
      <S.Icon>{icon}</S.Icon>
      <p> {partOfDay}</p>
    </S.Root>
  );
};

export default WeatherIcon;
