import { DateFormats, MAX_DATE_VALUE_LENGTH } from '@/constants';

function isValidMonth(month: number) {
  const MAX_NUMBER_OF_MONTH = 12;
  const MIN_NUMBER_OF_MONTH = 1;

  return month >= MIN_NUMBER_OF_MONTH && month <= MAX_NUMBER_OF_MONTH;
}

function isValidDay(day: number, numberOfDaysInMonth: number) {
  const MIN_NUMBER_OF_DAYS = 1;

  return day >= MIN_NUMBER_OF_DAYS && day <= numberOfDaysInMonth;
}

export function isInvalidDate(value: string, format = DateFormats.PRIMARY, separator = '/') {
  if (value.length < MAX_DATE_VALUE_LENGTH) return true;

  const valueArr = value.split(separator).map(Number);

  if (format === DateFormats.PRIMARY) {
    const [day, month, year] = valueArr;
    if (!isValidMonth(month)) return true;

    const numberOfDaysInMonth = new Date(year, month, 0).getDate();
    if (!isValidDay(day, numberOfDaysInMonth)) return true;

    return false;
  }

  if (format === DateFormats.SECONDARY) {
    const [month, day, year] = valueArr;
    if (!isValidMonth(month)) return true;

    const numberOfDaysInMonth = new Date(year, month, 0).getDate();
    if (!isValidDay(day, numberOfDaysInMonth)) return true;

    return false;
  }

  throw new Error('Invalid Date Format');
}
