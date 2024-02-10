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
