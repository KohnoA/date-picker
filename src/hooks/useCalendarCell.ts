import { useContext } from 'react';

import { ConfigContext } from '@/context';
import { DayType } from '@/types';

export function useCalendarCell(
  day: DayType,
  activeDay: number | null,
  rangeEndDay?: number | null,
) {
  const { showHolidays, showWeekends, min, max } = useContext(ConfigContext);

  const { timestamp, isCurrentMonth, isHoliday, isWeekend, todos } = day;

  const isLessMinDate = min ? timestamp < min.getTime() : false;
  const isMoreMaxDate = max ? timestamp > max.getTime() : false;
  const canSelectCell = isCurrentMonth && !isLessMinDate && !isMoreMaxDate;

  const showHoliday = !!(isHoliday && showHolidays);
  const isHidden = !!(isWeekend && !showWeekends);
  const hasTodos = !!todos.length;
  const isActive = activeDay === timestamp;
  const isRangeEnd = !isActive && timestamp === rangeEndDay;
  const isRangeStart = isActive && !!rangeEndDay && activeDay !== rangeEndDay;
  const isRangeMiddle =
    !isRangeStart &&
    !isRangeEnd &&
    !!activeDay &&
    !!rangeEndDay &&
    timestamp > activeDay &&
    timestamp < rangeEndDay;

  return {
    canSelectCell,
    isActive,
    isRangeStart,
    isRangeMiddle,
    isRangeEnd,
    showHoliday,
    hasTodos,
    isHidden,
  };
}
