import { DateFormats } from '@/constants';

import { timestampToDateFormat } from '../helpers';

export function dateRangeToString(
  startDay?: number | null,
  endDay?: number | null,
  format = DateFormats.PRIMARY,
) {
  return `${startDay ? timestampToDateFormat(startDay, format) : ''} - ${endDay ? timestampToDateFormat(endDay, format) : ''}`;
}
