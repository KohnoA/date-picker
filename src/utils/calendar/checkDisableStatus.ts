import { CalendarWeekStart } from '@/constants';

import {
  canGoNextMonth,
  canGoNextWeek,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevWeek,
  canGoPrevYear,
} from './canGo';

export function checkDisableStatus(
  isWeekView: boolean,
  year: number,
  month: number,
  week: number,
  weekStart?: CalendarWeekStart,
  max?: Date,
  min?: Date,
) {
  const disablePrevButton = isWeekView
    ? !canGoPrevWeek(year, month, week, weekStart, min)
    : !canGoPrevMonth(year, month, min);

  const disablePrevYearButton = !canGoPrevYear(year, month, min);

  const disableNextButton = isWeekView
    ? !canGoNextWeek(year, month, week, weekStart, max)
    : !canGoNextMonth(year, month, max);

  const disableNextYearButton = !canGoNextYear(year, month, max);

  return { disablePrevButton, disablePrevYearButton, disableNextButton, disableNextYearButton };
}
