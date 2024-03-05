import { DateErrors, DateFormats } from '@/constants';

import { checkMaxDate, checkMinDate, stringToDate } from '../helpers';

import { isInvalidDate } from './isInvalidDate';

type CheckDateValidationReturnType = {
  canSetValue: boolean;
  errorMessage: string | null;
};

export function checkDateValidation(
  value: string,
  min?: Date,
  max?: Date,
  format = DateFormats.PRIMARY,
): CheckDateValidationReturnType {
  const status: CheckDateValidationReturnType = {
    canSetValue: false,
    errorMessage: null,
  };

  switch (true) {
    case !value.length:
      return status;

    case isInvalidDate(value, format):
      status.errorMessage = DateErrors.INVALID + format;
      return status;

    case checkMinDate(stringToDate(value, format), min):
      status.errorMessage = DateErrors.VALUE_LESS_MIN;
      return status;

    case checkMaxDate(stringToDate(value, format), max):
      status.errorMessage = DateErrors.VALUE_MORE_MAX;
      return status;

    default:
      status.canSetValue = true;
      return status;
  }
}
