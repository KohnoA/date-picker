import { DateErrors, DateFormats } from '@/constants';

import { checkRangeDateValidation } from '../checkRangeDateValidation';

describe('Testing the checkRangeDateValidation function', () => {
  const format = 'DD/MM/YYYY';
  const min = new Date(2024, 0, 1);
  const max = new Date(2024, 5, 1);

  it('Should clear when empty', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: null,
    };

    expect(checkRangeDateValidation('')).toEqual(correctResult);
  });

  it('Should return an invalid date message', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.INVALID}${format} - ${format}`,
    };

    expect(checkRangeDateValidation('invalid/date/value - invalid/date/value')).toEqual(
      correctResult,
    );
  });

  it('Should return an error if only one date is passed', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.INVALID}${format} - ${format}`,
    };

    expect(checkRangeDateValidation('01/02/2024 - ')).toEqual(correctResult);
  });

  it('Should return an error if the start date is greater than the end date', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: DateErrors.INCORRECT_RANGE,
    };

    expect(checkRangeDateValidation('01/03/2024 - 01/02/2024')).toEqual(correctResult);
  });

  it('Should return a message if the date is less than the minimum', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.VALUE_LESS_MIN}`,
    };

    expect(checkRangeDateValidation('01/12/2023 - 01/02/2024', min, max)).toEqual(correctResult);
  });

  it('Should return a message if the date is greater than the maximum', () => {
    const correctResult = {
      canSetValue: false,
      errorMessage: `${DateErrors.VALUE_MORE_MAX}`,
    };

    expect(checkRangeDateValidation('01/02/2024 - 01/07/2024', min, max)).toEqual(correctResult);
  });

  it('Should return true if the value is valid', () => {
    const correctResult = {
      canSetValue: true,
      errorMessage: null,
    };

    expect(checkRangeDateValidation('01/02/2024 - 15/02/2024', min, max)).toEqual(correctResult);
  });

  it('Should return true if the value is valid with different format', () => {
    const correctResult = {
      canSetValue: true,
      errorMessage: null,
    };

    expect(
      checkRangeDateValidation('02/01/2024 - 02/15/2024', min, max, DateFormats.SECONDARY),
    ).toEqual(correctResult);
  });
});
