import axios from 'axios';

const WEATHER_API = process.env.REACT_WEATHER_API || 'https://api.openweathermap.org/data/2.5/forecast/hourly';
const SECRET_KEY = process.env.REACT_SECRET_WEATHER_API_KEY || 'b7a1f25e1ebee3f154d0a3e002defecb';

const getAllWeather = async (lat: Number, lon: number) => {
  const url = `${WEATHER_API}?lat=${lat}&lon=${lon}&appid=${SECRET_KEY}`

  const response = await axios.get(url);

  return response.data;
}

const weatherServices = {
  getAllWeather,
}

export default weatherServices;