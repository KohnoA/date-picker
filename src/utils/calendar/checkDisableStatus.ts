import { CalendarWeekStart } from '@/constants';

import {
  canGoNextMonth,
  canGoNextWeek,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevWeek,
  canGoPrevYear,
} from './canGo';

type CheckDisableStatusReturnType = Record<
  'disablePrevButton' | 'disableNextButton' | 'disablePrevYearButton' | 'disableNextYearButton',
  boolean
>;

export function checkDisableStatus(
  isWeekView: boolean,
  year: number,
  month: number,
  week: number,
  weekStart?: CalendarWeekStart,
  max?: Date,
  min?: Date,
): CheckDisableStatusReturnType {
  const result: CheckDisableStatusReturnType = {
    disablePrevButton: false,
    disableNextButton: false,
    disablePrevYearButton: !canGoPrevYear(year, month, min),
    disableNextYearButton: !canGoNextYear(year, month, max),
  };

  switch (true) {
    case isWeekView:
      result.disablePrevButton = !canGoPrevWeek(year, month, week, weekStart, min);
      result.disableNextButton = !canGoNextWeek(year, month, week, weekStart, max);
      break;
    default:
      result.disablePrevButton = !canGoPrevMonth(year, month, min);
      result.disableNextButton = !canGoNextMonth(year, month, max);
      break;
  }

  return result;
}
