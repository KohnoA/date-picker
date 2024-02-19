import {
  ERROR_INCORRECT_RANGE,
  ERROR_INVALID_RANGE_DATE,
  ERROR_VALUE_LESS_MIN,
  ERROR_VALUE_MORE_MAX,
  MAX_RANGE_DATE_VALUE_LENGTH,
  RANGE_DATE_SEPARATOR,
} from '@/constants';

import { dateStringHasError } from './dateStringHasError';

export function checkRangeDateValidation(value: string, min?: Date, max?: Date) {
  let errorMessage: string | null;

  const [start, end] = value.split(RANGE_DATE_SEPARATOR);
  const startDateTimestamp = new Date(start).getTime();
  const endDateTimestamp = new Date(end).getTime();

  const isIncorrectStartDate = start ? dateStringHasError(start) : true;
  const isIncorrectEndDate = end ? dateStringHasError(end) : true;

  const startMoreEnd = startDateTimestamp > endDateTimestamp;

  const startDateLessMin = min ? startDateTimestamp < min.getTime() : false;
  const endDateMoreMax = max ? endDateTimestamp > max.getTime() : false;
  const isFullRangeDateEntered = value.length === MAX_RANGE_DATE_VALUE_LENGTH;

  const canSetValue =
    isFullRangeDateEntered &&
    !startMoreEnd &&
    !startDateLessMin &&
    !endDateMoreMax &&
    !isIncorrectStartDate &&
    !isIncorrectEndDate;

  if (startMoreEnd) {
    errorMessage = ERROR_INCORRECT_RANGE;
  } else if (startDateLessMin) {
    errorMessage = ERROR_VALUE_LESS_MIN;
  } else if (endDateMoreMax) {
    errorMessage = ERROR_VALUE_MORE_MAX;
  } else if (isIncorrectStartDate || isIncorrectEndDate) {
    errorMessage = ERROR_INVALID_RANGE_DATE;
  } else {
    errorMessage = null;
  }

  return { canSetValue, errorMessage };
}
