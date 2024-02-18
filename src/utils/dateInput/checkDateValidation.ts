import { dateStringHasError } from './dateStringHasError';

const errorInvalidDate = 'Invalid date, required MM/DD/YYYY';
const errorLessMinDate = 'The value is less than the minimum date';
const errorMoreMaxDate = 'The value is more than the maximun date';

export function checkDateValidation(value: string, min?: Date, max?: Date) {
  const FULL_DATE_VALUE_LENGTH = 10;

  let errorMessage: string | null;

  const isIncorrectDate = dateStringHasError(value);
  const isFullDateEntered = value.length === FULL_DATE_VALUE_LENGTH;
  const isLessMinDate = min ? new Date(value).getTime() < min.getTime() : false;
  const isMoreMaxDate = max ? new Date(value).getTime() > max.getTime() : false;
  const canSetValue = isFullDateEntered && !isIncorrectDate && !isLessMinDate && !isMoreMaxDate;

  if (isLessMinDate) {
    errorMessage = errorLessMinDate;
  } else if (isMoreMaxDate) {
    errorMessage = errorMoreMaxDate;
  } else if (isIncorrectDate) {
    errorMessage = errorInvalidDate;
  } else {
    errorMessage = null;
  }

  return { canSetValue, errorMessage };
}
