import { REGEX_VALID_DATE_FORMAT } from '@/constants';

export function dateStringHasError(value: string, format = REGEX_VALID_DATE_FORMAT) {
  const INVALID_DATE_MASSEGE = 'Invalid Date';

  if (!value.length) return false;

  const isInvalidFormat = !format.test(value);
  const isInvalidDate = new Date(Date.parse(value)).toString() === INVALID_DATE_MASSEGE;

  return isInvalidFormat || isInvalidDate;
}
