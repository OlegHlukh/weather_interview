/* eslint-disable @typescript-eslint/no-unused-expressions */
import getPartOfDay from './getPartOfDay';

describe('get part of day', () => {
  it('shout return correct part of day from time', () => {
    const result = getPartOfDay(new Date(2022, 6, 4, 0).getHours());

    expect(result).toBe('night');
  })
  it('shout return correct part day from date', () => {
    const result = getPartOfDay(new Date(2022, 6, 4, 4));

    expect(result).toBe('morning');
  })
})