import { DateErrors, DateFormats } from '@/constants';

import { checkMaxDate, checkMinDate, stringToDate } from '../helpers';

import { isInvalidDate } from './isInvalidDate';

export function checkDateValidation(
  value: string,
  min?: Date,
  max?: Date,
  format = DateFormats.PRIMARY,
) {
  let canSetValue: boolean = false;
  let errorMessage: string | null = null;

  if (!value.length) {
    return { canSetValue, errorMessage };
  }

  const isIncorrectDate = isInvalidDate(value, format);
  const dateObj = stringToDate(value, format);
  const isLessMinDate = !isIncorrectDate && checkMinDate(dateObj, min);
  const isMoreMaxDate = !isIncorrectDate && checkMaxDate(dateObj, max);
  canSetValue = !isIncorrectDate && !isLessMinDate && !isMoreMaxDate;

  if (isIncorrectDate) {
    errorMessage = DateErrors.INVALID + format;
  } else if (isMoreMaxDate) {
    errorMessage = DateErrors.VALUE_MORE_MAX;
  } else if (isLessMinDate) {
    errorMessage = DateErrors.VALUE_LESS_MIN;
  }

  return { canSetValue, errorMessage };
}
