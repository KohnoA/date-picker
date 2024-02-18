import { useMemo, useRef, useState } from 'react';

import { CalendarWeekStart } from '@/constants';
import {
  canRewindNextMonth,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevYear,
  generateCalendarData,
} from '@/utils';

const DEFAULT_INITIAL_DATE = new Date(Date.now());

export function useCalendar(
  activeDay: number | null,
  weekStart?: CalendarWeekStart,
  min?: Date,
  max?: Date,
) {
  const prevActiveDayRef = useRef<number | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(
    activeDay ? new Date(activeDay) : DEFAULT_INITIAL_DATE,
  );

  if (prevActiveDayRef.current !== activeDay) {
    if (activeDay) setCurrentDate(new Date(activeDay));
    prevActiveDayRef.current = activeDay;
  }

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [month, year, weekStart],
  );

  const nextMonth = () => {
    if (!canRewindNextMonth(year, month, max)) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prevMonth = () => {
    if (!canRewindPrevMonth(year, month, min)) return;
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

  return { year, month, days, nextMonth, prevMonth, nextYear, prevYear };
}
