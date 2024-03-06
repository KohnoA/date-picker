import { DateErrors, DateFormats } from '@/constants';

import { checkDateValidation } from '../checkDateValidation';

describe('Testing the checkDateValidation function', () => {
  const format = 'DD/MM/YYYY';
  const min = new Date(2024, 0, 1);
  const max = new Date(2024, 5, 1);

  it('Should clear when empty', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: null,
    };

    expect(checkDateValidation('')).toEqual(correctResult);
  });

  it('Should return an invalid date message', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.INVALID}${format}`,
    };

    expect(checkDateValidation('invalid/date/value')).toEqual(correctResult);
  });

  it('Should return a message if the date is less than the minimum', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.VALUE_LESS_MIN}`,
    };

    expect(checkDateValidation('01/12/2023', min, max)).toEqual(correctResult);
  });

  it('Should return a message if the date is greater than the maximum', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.VALUE_MORE_MAX}`,
    };

    expect(checkDateValidation('01/07/2024', min, max)).toEqual(correctResult);
  });

  it('Should return true if the value is valid', () => {
    const correctResult = {
      canSetValue: true,
      errorMessage: null,
    };

    expect(checkDateValidation('15/02/2024', min, max)).toEqual(correctResult);
  });

  it('Should return true if the value is valid with different format', () => {
    const correctResult = {
      canSetValue: true,
      errorMessage: null,
    };

    expect(checkDateValidation('02/15/2024', min, max, DateFormats.SECONDARY)).toEqual(
      correctResult,
    );
  });
});
