import { CalendarWeekStart } from '@/constants';

import {
  canRewindNextMonth,
  canRewindNextWeek,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevWeek,
  canRewindPrevYear,
} from './canRewind';

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
    ? !canRewindPrevWeek(year, month, week, weekStart, min)
    : !canRewindPrevMonth(year, month, min);

  const disablePrevYearButton = !canRewindPrevYear(year, month, min);

  const disableNextButton = isWeekView
    ? !canRewindNextWeek(year, month, week, weekStart, max)
    : !canRewindNextMonth(year, month, max);

  const disableNextYearButton = !canRewindNextYear(year, month, max);

  return { disablePrevButton, disablePrevYearButton, disableNextButton, disableNextYearButton };
}
