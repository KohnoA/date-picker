import { DateFormats } from '@/constants';

import { isInvalidDate } from '../isInvalidDate';

describe('Testing the isInvalidDate function', () => {
  it('Should work with primary format', () => {
    expect(isInvalidDate('15/01/2024', DateFormats.PRIMARY)).toBe(false);
  });

  it('Should work with secondary format', () => {
    expect(isInvalidDate('01/15/2024', DateFormats.SECONDARY)).toBe(false);
  });

  it('Should work with different separators', () => {
    expect(isInvalidDate('15.01.2024', DateFormats.PRIMARY, '.')).toBe(false);
  });

  it('Should return false if date is invalid', () => {
    expect(isInvalidDate('99/99/9999')).toBe(true);
  });

  it('Should throw an error if the format is not supported', () => {
    expect(() => isInvalidDate('2024/02/01', 'YYYY/MM/DD' as DateFormats)).toThrow(
      'Invalid Date Format',
    );
  });
});
