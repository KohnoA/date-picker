import { DateFormats } from '@/constants';

import { stringToDate } from '../stringToDate';

describe('Testing the stringToDate function', () => {
  it('Should work with primary format', () => {
    const result = stringToDate('01/12/2024', DateFormats.PRIMARY).toDateString();
    const correctResult = new Date(2024, 11, 1).toDateString();

    expect(result).toBe(correctResult);
  });

  it('Should wok with secondary format', () => {
    const result = stringToDate('12/01/2024', DateFormats.SECONDARY).toDateString();
    const correctResult = new Date(2024, 11, 1).toDateString();

    expect(result).toBe(correctResult);
  });

  it('Should work with different separators', () => {
    const separator = '.';
    const result = stringToDate('12.01.2024', DateFormats.SECONDARY, separator).toDateString();
    const correctResult = new Date(2024, 11, 1).toDateString();

    expect(result).toBe(correctResult);
  });

  it('An error should be thrown if the format is incorrect.', () => {
    expect(() => stringToDate('12/01/2024', 'Invalid Format' as DateFormats)).toThrow(
      'Invalid Date Format',
    );
  });
});
