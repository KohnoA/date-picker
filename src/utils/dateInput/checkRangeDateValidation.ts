import { DateErrors, DateFormats, RANGE_DATE_SEPARATOR } from '@/constants';

import { checkMaxDate, checkMinDate, stringToDate } from '../helpers';

import { isInvalidDate } from './isInvalidDate';

type CheckRangeDateValidationReturnType = {
  canSetValue: boolean;
  errorMessage: string | null;
};

export function checkRangeDateValidation(
  value: string,
  min?: Date,
  max?: Date,
  format = DateFormats.PRIMARY,
): CheckRangeDateValidationReturnType {
  const [start, end] = value.split(RANGE_DATE_SEPARATOR);
  const invalidError = `${DateErrors.INVALID}${format} - ${format}`;

  const status: CheckRangeDateValidationReturnType = {
    canSetValue: false,
    errorMessage: null,
  };

  switch (true) {
    case !value.length:
      return status;

    case !start || !end:
      status.errorMessage = invalidError;
      return status;

    case isInvalidDate(start, format) || isInvalidDate(end, format):
      status.errorMessage = invalidError;
      return status;

    case checkMinDate(stringToDate(start, format), min):
      status.errorMessage = DateErrors.VALUE_LESS_MIN;
      return status;

    case checkMaxDate(stringToDate(end, format), max):
      status.errorMessage = DateErrors.VALUE_MORE_MAX;
      return status;

    case stringToDate(start, format).getTime() > stringToDate(end, format).getTime():
      status.errorMessage = DateErrors.INCORRECT_RANGE;
      return status;

    default:
      status.canSetValue = true;
      return status;
  }
}
