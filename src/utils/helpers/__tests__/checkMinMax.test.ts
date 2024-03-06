import { checkMaxDate, checkMinDate } from '../checkMinMax';

describe('Testing the checkMinDate and checkMaxDate functions', () => {
  const min = new Date(2010, 0, 1);
  const max = new Date(2030, 0, 1);

  it('If the range is not exceeded it should return false', () => {
    const current = new Date(2020, 0, 1);

    expect(checkMinDate(current, min)).toBe(false);
    expect(checkMaxDate(current, max)).toBe(false);
  });

  it('If the date is greater than the maximum, it should return true', () => {
    const current = new Date(2030, 1, 1);

    expect(checkMaxDate(current, max)).toBe(true);
  });

  it('If the date is less than the minimum, it should return true', () => {
    const current = new Date(2009, 11, 1);

    expect(checkMinDate(current, min)).toBe(true);
  });

  it('Should work with timestamp', () => {
    const current = new Date(2020, 0, 1);

    expect(checkMinDate(current.getTime(), min)).toBe(false);
    expect(checkMaxDate(current.getTime(), max)).toBe(false);
  });
});
