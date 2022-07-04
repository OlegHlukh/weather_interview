interface MainDetail {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface WeatherDetail {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface WindDetail {
  deg: number;
  gust: number;
  speed: number;
}

interface PeriodDetail {
  dt_txt: string;
  dt: number;
  main: MainDetail;
  visibility: number;
  weather: WeatherDetail[];
  wind: WindDetail;
}

interface WeatherList {
  city: Record<string, unknown>;
  list: PeriodDetail[];
}

export type {WeatherList, PeriodDetail, WindDetail};
