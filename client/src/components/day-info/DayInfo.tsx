import {FC, useEffect, useMemo, useState} from 'react';

import useAppDispatch from '../../hooks/redux/useAppDispatch';
import useAppSelector from '../../hooks/redux/useAppSelector';
import useGeolocation from '../../hooks/useGeolocation';
import fetchWeather from '../../store/reducers/weather/actionCreator';
import getPartOfDay from '../../utils/getPartOfDay/getPartOfDay';
import PartOfDay from '../part-of-day-info/PartOfDayInfo';
import WeatherCard from '../weather-card/WeatherCard';
import { WeatherType } from '../weather-card/weatherType';

import * as S from './DayInfo.styled';

const DayInfo: FC = () => {
  const dispatch = useAppDispatch();
  const {coordinate, isLoading: isCoordinateLoading} = useGeolocation();

  const {weather, isLoading: weatherIsLoading} = useAppSelector(
    (state) => state.weatherReducer,
  );

  const [partOfDayDt, setPartOfDayDt] = useState(0);

  useEffect(() => {
    if (isCoordinateLoading) return;

    dispatch(fetchWeather(coordinate));
  }, [isCoordinateLoading, dispatch, coordinate]);

  useEffect(() => {
    if (!weatherIsLoading) {
      setPartOfDayDt(weather?.list[0]?.dt);
    }
  }, [weatherIsLoading, weather]);

  const partOfDayInfo = useMemo(() => {
    if (weatherIsLoading || !partOfDayDt) {
      return;
    }

    return weather.list.find((el) => el.dt === partOfDayDt);
  }, [partOfDayDt, weatherIsLoading, weather.list]);


  console.log(weather);
  

  if (weatherIsLoading) {
    return <h1>Loading</h1>;
  }
  
  return (
    <S.Root>
      <S.Grid>
        {weather.list.map((hourlyInfo) => {
          const hours =  new Date(hourlyInfo.dt_txt).getHours();
          const part = hours > 20 ? 'night' : 'day';

          const partOfDay = getPartOfDay(hours);
          
          return (
            <div onClick={() => setPartOfDayDt(hourlyInfo.dt)}>
              <WeatherCard
                temperature={hourlyInfo.main.temp}
                weatherType={(`${hourlyInfo.weather[0].description} ${part}`) as WeatherType}
                description={hourlyInfo.weather[0].description}
                partOfDay={partOfDay}
              />
            </div>
          );
        })}
      </S.Grid>
      {partOfDayInfo && (
        <PartOfDay
          pressure={partOfDayInfo.main.pressure}
          humidity={partOfDayInfo.main.humidity}
          wind={partOfDayInfo.wind}
          uvIndex={partOfDayInfo.main.temp_kf}
        />
      )}
    </S.Root>
  );
};

export default DayInfo;
