import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import useAppDispatch from '../../hooks/redux/useAppDispatch';
import useAppSelector from '../../hooks/redux/useAppSelector';
import useGeolocation from '../../hooks/useGeolocation';
import fetchWeather from '../../store/reducers/weather/actionCreator';
import PartOfDay from '../part-of-day-info/PartOfDayInfo';
import WeatherList from '../weather-list/WeatherList';

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

  const handleClick = useCallback((value: number) => {
    setPartOfDayDt(value);
  }, [])

  console.log('waterh', weather);
  

  if (weatherIsLoading) {
    return <h1>Loading</h1>;
  }
  
  return (
    <S.Root>
      {weather.list && 
        <WeatherList 
          weatherList={weather.list}
          handleClick={handleClick}
        />
      }
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
