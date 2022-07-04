import axios from 'axios';
import {WeatherList} from '../models/Weather';

const WEATHER_API =
  process.env.REACT_WEATHER_API ||
  'https://api.openweathermap.org/data/2.5/forecast';

  const SECRET_KEY =
  process.env.REACT_SECRET_WEATHER_API_KEY ||
  '9f33a9b3667f0f3e5e08ceebcd322a4f';

const getWeatherByDay = async (lat: Number, lon: number) => {
  const url = `${WEATHER_API}?lat=${lat}&lon=${lon}&appid=${SECRET_KEY}&cnt=4&units=metric`;

  const response = await axios.get<WeatherList>(url);

  return response.data;
};

const weatherServices = {
  getWeatherByDay,
};

export default weatherServices;
