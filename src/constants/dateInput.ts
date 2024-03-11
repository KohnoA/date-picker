export const MAX_DATE_VALUE_LENGTH = 10;
export const MAX_RANGE_DATE_VALUE_LENGTH = 23;

export const RANGE_DATE_SEPARATOR = ' - ';

export enum DateFormats {
  PRIMARY = 'DD/MM/YYYY',
  SECONDARY = 'MM/DD/YYYY',
}

export enum DateErrors {
  INVALID = 'Invalid date, required ',
  INCORRECT_RANGE = 'The start date cannot be greater than the end date',
  VALUE_LESS_MIN = 'The value is less than the minimum date',
  VALUE_MORE_MAX = 'The value is more than the maximun date',
}
