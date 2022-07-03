import {FC, useEffect, useState} from 'react';
import useAppDispatch from './hooks/redux/useAppDispath';
import useAppSelector from './hooks/redux/useAppSelector';
import useGeolocation from './hooks/useGeolocation';
import fetchWeather from './store/reducers/weather/actionCreator';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const {weather, error: weatherError, isLoading: weatherIsLoading} = useAppSelector(state => state.weatherReducer)

  const {error, coordinate, isLoading} = useGeolocation();

  useEffect(() => {
    if (isLoading) return;

    dispatch(fetchWeather(coordinate))
  
  }, [isLoading, dispatch, coordinate]);

  return (
    <div>
      {weatherError && <div>{weatherError}</div>}
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          <p>{coordinate.latitude}</p>
          <p>{coordinate.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default App;
