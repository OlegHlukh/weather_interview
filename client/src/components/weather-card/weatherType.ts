import Sun from '../UI/icons/Sun';
import Cloud from '../UI/icons/Cloud';
import Rain from '../UI/icons/Rain';
import Storm from '../UI/icons/Storm';
import SunCloud from '../UI/icons/sun-cloud/SunCloud';
import Moon from '../UI/icons/Moon';
import MoonCloud from '../UI/icons/MooCloud';
import MoonRain from '../UI/icons/MoonRain';
import DarkCloud from '../UI/icons/DarkCloud';

const weatherType = {
  'clear sky day': Sun,
  'scattered clouds day': Cloud,
  'broken clouds day': Cloud,
  'light rain day': Rain,
  'moderate rain day': Rain,
  'few clouds day': SunCloud,
  'shower rain day': Rain,
  'thunderstorm day': Storm,
  'clear sky night': Moon,
  'few cloud night': MoonCloud,
  'light rain night': MoonRain,
  'overcast clouds day': DarkCloud,
  'scattered clouds night': DarkCloud,
  'broken clouds night': DarkCloud,
}

export default weatherType;

type WeatherType = keyof typeof weatherType;

export type {WeatherType}

