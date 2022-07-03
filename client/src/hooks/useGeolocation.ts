import {useEffect, useMemo, useState} from 'react';

const useGeolocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation is not available in your browser');
    }

    const onSuccess = (location: GeolocationPosition) => {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setIsLoading(false);
    };

    const onError = (error: GeolocationPositionError) => {
      setError(error.message);
      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return useMemo(
    () => ({
      coordinate: {
        latitude,
        longitude,
      },
      error,
      isLoading,
    }),
    [error, isLoading, latitude, longitude],
  );
};

export default useGeolocation;
