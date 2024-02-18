import { REGEX_VALID_DATE_CHARACTERS } from '@/constants';

export function isValidDateInputValue(value: string) {
  const MIN_VALUE_LENGTH = 0;
  const MAX_VALUE_LENGTH = 10;

  const containsOnlyValidCharacters =
    REGEX_VALID_DATE_CHARACTERS.test(value) || value.length === MIN_VALUE_LENGTH;
  const isLessMaxLength = value.length <= MAX_VALUE_LENGTH;

  return containsOnlyValidCharacters && isLessMaxLength;
}
