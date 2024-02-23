import { DateFormats } from '@/constants';

export function timestampToDateFormat(timestamp: number, format = DateFormats.PRIMARY) {
  const date = new Date(timestamp);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const result = format.replace(/dd/i, day).replace(/mm/i, month).replace(/yyyy/i, year);

  return result;
}
