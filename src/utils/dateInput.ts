import { REGEX_VALID_DATE_CHARACTERS, REGEX_VALID_DATE_FORMAT } from '@/constants';

export function dateStringHasError(value: string, format = REGEX_VALID_DATE_FORMAT) {
  const INVALID_DATE_MASSEGE = 'Invalid Date';

  if (!value.length) return false;

  const isInvalidFormat = !format.test(value);
  const isInvalidDate = new Date(Date.parse(value)).toString() === INVALID_DATE_MASSEGE;

  return isInvalidFormat || isInvalidDate;
}

export function isValidDateInputValue(value: string) {
  const MIN_VALUE_LENGTH = 0;
  const MAX_VALUE_LENGTH = 10;

  const containsOnlyValidCharacters =
    REGEX_VALID_DATE_CHARACTERS.test(value) || value.length === MIN_VALUE_LENGTH;
  const isLessMaxLength = value.length <= MAX_VALUE_LENGTH;

  return containsOnlyValidCharacters && isLessMaxLength;
}

export function timestampToDateFormat(timestamp: number, format = 'MM/DD/YYYY') {
  const date = new Date(timestamp);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const result = format.replace(/dd/i, day).replace(/mm/i, month).replace(/yyyy/i, year);

  return result;
}
