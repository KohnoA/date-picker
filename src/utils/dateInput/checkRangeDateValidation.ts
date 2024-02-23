import {
  DateErrors,
  DateFormats,
  MAX_RANGE_DATE_VALUE_LENGTH,
  RANGE_DATE_SEPARATOR,
} from '@/constants';

import { checkMaxDate, checkMinDate, stringToDate } from '../helpers';

import { isInvalidDate } from './isInvalidDate';

export function checkRangeDateValidation(
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

  const [start, end] = value.split(RANGE_DATE_SEPARATOR);
  const invalidError = `${DateErrors.INVALID}${format} - ${format}`;

  if (!start || !end) {
    return { canSetValue, errorMessage: invalidError };
  }

  const startDate = stringToDate(start, format);
  const endDate = stringToDate(end, format);

  const isIncorrectStartDate = isInvalidDate(start, format);
  const isIncorrectEndDate = isInvalidDate(end, format);

  const startMoreEnd = startDate.getTime() > endDate.getTime();
  const startDateLessMin = checkMinDate(startDate, min);
  const endDateMoreMax = checkMaxDate(endDate, max);
  const isFullRangeDateEntered = value.length === MAX_RANGE_DATE_VALUE_LENGTH;

  canSetValue =
    isFullRangeDateEntered &&
    !startMoreEnd &&
    !startDateLessMin &&
    !endDateMoreMax &&
    !isIncorrectStartDate &&
    !isIncorrectEndDate;

  if (isIncorrectStartDate || isIncorrectEndDate) {
    errorMessage = invalidError;
  } else if (startDateLessMin) {
    errorMessage = DateErrors.VALUE_LESS_MIN;
  } else if (endDateMoreMax) {
    errorMessage = DateErrors.VALUE_MORE_MAX;
  } else if (startMoreEnd) {
    errorMessage = DateErrors.INCORRECT_RANGE;
  }

  return { canSetValue, errorMessage };
}
