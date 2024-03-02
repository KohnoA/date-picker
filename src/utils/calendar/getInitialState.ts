import { checkMaxDate, checkMinDate } from '../helpers';

export function getInitialState(activeDay?: number | null, min?: Date, max?: Date): Date {
  const INITIAL_DATE = new Date(Date.now());

  if (activeDay) return new Date(activeDay);
  if (min && checkMinDate(INITIAL_DATE, min)) return min;
  if (max && checkMaxDate(INITIAL_DATE, max)) return max;

  return INITIAL_DATE;
}
