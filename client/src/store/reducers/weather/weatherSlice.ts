import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherList } from '../../../models/Weather';
import fetchWeather from './actionCreator';

interface WeatherState {
  weather: WeatherList;
  isLoading: boolean;
  error: null | string;
}

const initialState: WeatherState = {
  weather: {
    city: {},
    list: []
  },
  isLoading: false,
  error: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.fulfilled.type]: (state, action: PayloadAction<WeatherList>) => {
      state.isLoading = false;
      state.error = null;
      state.weather = action.payload;
    },
    [fetchWeather.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default weatherSlice.reducer;