import {
  MAX_DATE_VALUE_LENGTH,
  MAX_RANGE_DATE_VALUE_LENGTH,
  REGEX_VALID_DATE_CHARACTERS,
  REGEX_VALID_RANGE_DATE_CHARACTERS,
} from '@/constants';

function isValidDateValue(maxLength: number, regex: RegExp) {
  return (value: string) => {
    const containsOnlyValidCharacters = regex.test(value);
    const isLessMaxLength = value.length <= maxLength;

    return containsOnlyValidCharacters && isLessMaxLength;
  };
}

export const isValidSimpleDateValue = isValidDateValue(
  MAX_DATE_VALUE_LENGTH,
  REGEX_VALID_DATE_CHARACTERS,
);

export const isValidRangeDateValue = isValidDateValue(
  MAX_RANGE_DATE_VALUE_LENGTH,
  REGEX_VALID_RANGE_DATE_CHARACTERS,
);
