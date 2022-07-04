import { FC } from 'react';
import { PeriodDetail } from '../../models/Weather';
import getPartOfDay from '../../utils/getPartOfDay/getPartOfDay';
import WeatherCard from '../weather-card/WeatherCard';
import { WeatherType } from '../weather-card/weatherType';

import * as S from './WeatherList.styled'

interface WeatherListProps {
  handleClick: (value: number) => void;
  weatherList: PeriodDetail[];
};

const WeatherList: FC<WeatherListProps> = ({
  handleClick,
  weatherList,
}) => {

  return (
    <S.Grid>
    {weatherList.map((hourlyInfo) => {
      const hours =  new Date(hourlyInfo.dt_txt).getHours();

      const partOfDay = getPartOfDay(hours);
      
      return (
        <div key={hourlyInfo.dt} onClick={() => handleClick(hourlyInfo.dt)}>
          <WeatherCard
            temperature={hourlyInfo.main.temp}
            weatherType={(`${hourlyInfo.weather[0].description} ${partOfDay === 'night' ? 'night' : 'day'}`) as WeatherType}
            description={hourlyInfo.weather[0].description}
            partOfDay={partOfDay}
          />
        </div>
      );
    })}
  </S.Grid>
  )
}

export default WeatherList;