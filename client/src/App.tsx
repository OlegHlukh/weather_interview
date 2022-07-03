import {FC, useEffect, useState} from 'react';
import useGeolocation from './hooks/useGeolocation';
import weatherServices from './services/weatherServices';

const App: FC = () => {
  const [data, setData] = useState(null);

  const {error, coordinate, isLoading} = useGeolocation();

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await weatherServices.getAllWeather(
          coordinate.latitude,
          coordinate.longitude,
        );

        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    if (isLoading) return;
    getWeather();
  }, [coordinate, isLoading]);

  return (
    <div>
      {error && <div>{error}</div>}
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
