import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import weatherServices from '../../../services/weatherServices';

const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (coord: {latitude: number; longitude: number}, {rejectWithValue}) => {
    try {
      const weather = await weatherServices.getWeatherByDay(
        coord.latitude,
        coord.longitude,
      );
      return weather;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export default fetchWeather;
