const compassSector = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

const getWindDirection = (deg: number) => {
  return compassSector[+(deg / 22.5).toFixed(0)]
};

export default getWindDirection;
