import {FC} from 'react';
import { PartOfDay } from '../../utils/getPartOfDay/getPartOfDay';
import WeatherIcon from '../weather-icons/WeatherIcon';

import * as S from './WeatherCard.styled';
import weatherIcon, {WeatherType} from './weatherType';


interface WeatherCardProps {
  weatherType: WeatherType;
  temperature: number;
  description: string;
  partOfDay: PartOfDay;
}

const WeatherCard: FC<WeatherCardProps> = ({
  weatherType,
  temperature,
  description,
  partOfDay
}) => {

  const Icon = weatherIcon[weatherType];

  return <S.Root>
    <div >
      <WeatherIcon icon={<Icon />} partOfDay={partOfDay}/>
    </div>
    <S.WeatherDetails part={partOfDay}>
      <h3>{Math.trunc(temperature)}</h3>
      <p>{description}</p>
    </S.WeatherDetails>
  </S.Root>;
};

export default WeatherCard;
