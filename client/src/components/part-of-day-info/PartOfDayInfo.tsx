import { FC } from 'react';
import { WindDetail } from '../../models/Weather';

import {ReactComponent as WindIcon} from '../../assets/icons/wind.svg';
import {ReactComponent as UvIndexIcon} from '../../assets/icons/uvIndex.svg';
import {ReactComponent as HumidityIcon} from '../../assets/icons/humidity.svg';
import {ReactComponent as PressureIcon} from '../../assets/icons/pressure.svg';
import WeatherConditionCard from '../weather-condition-card/WeatherConditionCard';

import * as S from './PartOfDayInfo.styled';
import getWindDirection from '../../utils/getWindDirection/getWindDirection';

interface PartOfDayProps {
  wind: WindDetail;
  humidity: number;
  uvIndex: number;
  pressure: number;
}

const PartOfDay: FC<PartOfDayProps> = ({
  wind,
  humidity,
  uvIndex,
  pressure
}) => {

  return <S.Root>
    <h3>today details</h3>
    <S.Grid>
      <WeatherConditionCard 
        icon={<WindIcon width={'100%'} height={'100%'}/>}
        value={`${getWindDirection(wind.deg)}  ${Math.trunc(wind.speed)} kmh`}
        description='wind'
      />
      <WeatherConditionCard 
        icon={<HumidityIcon width={'100%'} height={'100%'}/>}
        value={`${humidity}%`}
        description='humidity'
      />
      <WeatherConditionCard 
        icon={<UvIndexIcon width={'100%'} height={'100%'}/>}
        value={`${Math.trunc(uvIndex)}`}
        description='UV index'
      />
      <WeatherConditionCard 
        icon={<PressureIcon width={'100%'} height={'100%'}/>}
        value={`${pressure} hPa`}
        description='pressure'
      />
    </S.Grid>
  </S.Root>
}

export default PartOfDay;
