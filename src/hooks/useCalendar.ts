import { useMemo, useRef, useState } from 'react';

import { CalendarView } from '@/constants';
import { UseCalendarOptionsType } from '@/types';
import {
  canRewindNextMonth,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevYear,
  countWeeksInMonth,
  generateCalendarData,
} from '@/utils';
import { canRewindNextWeek, canRewindPrevWeek } from '@/utils/calendar/canRewind';

const INITIAL_DATE = new Date(Date.now());
const INITIAL_WEEK_VALUE = 1;
const NUMBER_DAYS_IN_WEEK = 7;

export function useCalendar(options: UseCalendarOptionsType) {
  const { activeDay, view, weekStart, min, max } = options;

  const prevActiveDayRef = useRef<number | null>(null);
  const [week, setWeek] = useState<number>(INITIAL_WEEK_VALUE);
  const [currentDate, setCurrentDate] = useState<Date>(
    activeDay ? new Date(activeDay) : INITIAL_DATE,
  );

  if (prevActiveDayRef.current !== activeDay) {
    if (activeDay) setCurrentDate(new Date(activeDay));
    prevActiveDayRef.current = activeDay;
  }

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const viewOnWeeks = view === CalendarView.WEEK;

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [month, year, weekStart],
  );

  const next = () => {
    if (viewOnWeeks) {
      if (!canRewindNextWeek(year, month, week, weekStart, max)) return;

      const maxWeeksInMonth = countWeeksInMonth(currentDate, weekStart);
      const newWeekValue = week === maxWeeksInMonth ? INITIAL_WEEK_VALUE : week + 1;

      setWeek(newWeekValue);

      if (newWeekValue !== INITIAL_WEEK_VALUE) return;
    } else if (!canRewindNextMonth(year, month, max)) return;

    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prev = () => {
    if (viewOnWeeks) {
      if (!canRewindPrevWeek(year, month, week, weekStart, min)) return;

      const maxWeeksInMonth = countWeeksInMonth(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
        weekStart,
      );
      const newWeekValue = week === INITIAL_WEEK_VALUE ? maxWeeksInMonth : week - 1;

      setWeek(newWeekValue);

      if (newWeekValue !== maxWeeksInMonth) return;
    } else if (!canRewindPrevMonth(year, month, min)) return;

    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextYear = () => {
    if (!canRewindNextYear(year, month, max)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)));
  };

  const prevYear = () => {
    if (!canRewindPrevYear(year, month, min)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
  };

  return {
    days: viewOnWeeks
      ? days.slice(NUMBER_DAYS_IN_WEEK * week - NUMBER_DAYS_IN_WEEK, NUMBER_DAYS_IN_WEEK * week)
      : days,
    year,
    month,
    week,
    next,
    prev,
    nextYear,
    prevYear,
  };
}
