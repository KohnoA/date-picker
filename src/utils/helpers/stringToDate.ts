import { DateFormats } from '@/constants';

export function stringToDate(value: string, format = DateFormats.PRIMARY, separator = '/') {
  const valueArr = value.split(separator).map(Number);

  if (format === DateFormats.SECONDARY) {
    const [month, day, year] = valueArr;
    return new Date(year, month - 1, day);
  }

  if (format === DateFormats.PRIMARY) {
    const [day, month, year] = valueArr;
    return new Date(year, month - 1, day);
  }

  throw new Error('Invalid Date Format');
}
