import {
  ERROR_INVALID_SIMPLE_DATE,
  ERROR_VALUE_LESS_MIN,
  ERROR_VALUE_MORE_MAX,
  MAX_DATE_VALUE_LENGTH,
} from '@/constants';

import { dateStringHasError } from './dateStringHasError';

export function checkDateValidation(value: string, min?: Date, max?: Date) {
  let errorMessage: string | null;

  const isIncorrectDate = dateStringHasError(value);
  const isFullDateEntered = value.length === MAX_DATE_VALUE_LENGTH;
  const isLessMinDate = min ? new Date(value).getTime() < min.getTime() : false;
  const isMoreMaxDate = max ? new Date(value).getTime() > max.getTime() : false;
  const canSetValue = isFullDateEntered && !isIncorrectDate && !isLessMinDate && !isMoreMaxDate;

  if (isIncorrectDate) {
    errorMessage = ERROR_INVALID_SIMPLE_DATE;
  } else if (isMoreMaxDate) {
    errorMessage = ERROR_VALUE_MORE_MAX;
  } else if (isLessMinDate) {
    errorMessage = ERROR_VALUE_LESS_MIN;
  } else {
    errorMessage = null;
  }

  return { canSetValue, errorMessage };
}
