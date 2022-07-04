/* eslint-disable @typescript-eslint/no-unused-expressions */
import getDayOfMonth from './getDayOfMonth';

describe('get day of month', () => {
  it('shout return correct day from time', () => {
    const result = getDayOfMonth(new Date(2022, 6, 4).getTime());

    expect(result).toBe('July 4');
  }),
  it('shout return correct day from date', () => {
    const result = getDayOfMonth(new Date(2022, 6, 4).getTime());

    expect(result).toBe('July 4');
  })
})