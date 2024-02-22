import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { CalendarView } from '@/constants';
import { UseCalendarOptionsType } from '@/types';
import {
  canRewindNextMonth,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevYear,
  countWeeksInMonth,
  generateCalendarData,
  sliceOnWeeks,
} from '@/utils';
import { canRewindNextWeek, canRewindPrevWeek } from '@/utils/calendar/canRewind';

const INITIAL_DATE = new Date(Date.now());
const INITIAL_WEEK_VALUE = 1;

export function useCalendar(options: UseCalendarOptionsType) {
  const { activeDay, view, weekStart, min, max } = options;

  const prevActiveDayRef = useRef<number | null>(null);
  const [week, setWeek] = useState<number>(INITIAL_WEEK_VALUE);
  const [currentDate, setCurrentDate] = useState<Date>(
    activeDay ? new Date(activeDay) : INITIAL_DATE,
  );

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const viewOnWeeks = view === CalendarView.WEEK;

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [month, year, weekStart],
  );

  const next = useCallback(() => {
    if (viewOnWeeks) {
      if (!canRewindNextWeek(year, month, week, weekStart, max)) return;

      const maxWeeksInMonth = countWeeksInMonth(currentDate, weekStart);
      const newWeekValue = week === maxWeeksInMonth ? INITIAL_WEEK_VALUE : week + 1;

      setWeek(newWeekValue);

      if (newWeekValue !== INITIAL_WEEK_VALUE) return;
    } else if (!canRewindNextMonth(year, month, max)) return;

    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  }, [viewOnWeeks, year, month, week, weekStart, max]);

  const prev = useCallback(() => {
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
  }, [viewOnWeeks, year, month, week, weekStart, min]);

  const nextYear = useCallback(() => {
    if (!canRewindNextYear(year, month, max)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)));
  }, [year, month, max]);

  const prevYear = useCallback(() => {
    if (!canRewindPrevYear(year, month, min)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
  }, [year, month, max]);

  useEffect(() => {
    if (prevActiveDayRef.current === activeDay) return;

    if (activeDay) setCurrentDate(new Date(activeDay));
    prevActiveDayRef.current = activeDay;
  }, [activeDay]);

  return {
    days: viewOnWeeks ? sliceOnWeeks(days, week) : days,
    year,
    month,
    week,
    next,
    prev,
    nextYear,
    prevYear,
  };
}
