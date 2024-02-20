import { timestampToDateFormat } from '../helpers';

export function convertDateRangeToString(startDay?: number | null, endDay?: number | null) {
  return `${startDay ? timestampToDateFormat(startDay) : ''} - ${endDay ? timestampToDateFormat(endDay) : ''}`;
}
