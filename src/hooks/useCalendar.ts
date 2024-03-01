import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { CalendarView } from '@/constants';
import { UseCalendarOptionsType } from '@/types';
import {
  canRewindNextMonth,
  canRewindNextWeek,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevWeek,
  canRewindPrevYear,
  countWeeksInMonth,
  generateCalendarData,
  sliceOnWeeks,
} from '@/utils';

const INITIAL_DATE = new Date(Date.now());
const INITIAL_WEEK_VALUE = 1;

export function useCalendar(options: UseCalendarOptionsType) {
  const { activeDay, view, weekStart, min, max } = options;

  const prevActiveDayRef = useRef<number | null>(null);
  const [week, setWeek] = useState(INITIAL_WEEK_VALUE);
  const [currentDate, setCurrentDate] = useState(activeDay ? new Date(activeDay) : INITIAL_DATE);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const viewOnWeeks = view === CalendarView.WEEK;

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [month, year, weekStart],
  );

  const setNextWeek = useCallback(() => {
    if (!canRewindNextWeek(year, month, week, weekStart, max)) return;

    const maxWeeksInMonth = countWeeksInMonth(currentDate, weekStart);
    const newWeekValue = week === maxWeeksInMonth ? INITIAL_WEEK_VALUE : week + 1;

    setWeek(newWeekValue);

    if (newWeekValue !== INITIAL_WEEK_VALUE) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  }, [year, month, week, weekStart, max]);

  const setPrevWeek = useCallback(() => {
    if (!canRewindPrevWeek(year, month, week, weekStart, min)) return;

    const maxWeeksInMonth = countWeeksInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
      weekStart,
    );
    const newWeekValue = week === INITIAL_WEEK_VALUE ? maxWeeksInMonth : week - 1;

    setWeek(newWeekValue);

    if (newWeekValue !== maxWeeksInMonth) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  }, [year, month, week, weekStart, min]);

  const setNextMonth = useCallback(() => {
    if (!canRewindNextMonth(year, month, max)) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  }, [year, month, max]);

  const setPrevMonth = useCallback(() => {
    if (!canRewindPrevMonth(year, month, min)) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  }, [year, month, min]);

  const setNextYear = useCallback(() => {
    if (!canRewindNextYear(year, month, max)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)));
  }, [year, month, max]);

  const setPrevYear = useCallback(() => {
    if (!canRewindPrevYear(year, month, min)) return;
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
  }, [year, month, min]);

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
    setNextWeek,
    setPrevWeek,
    setNextMonth,
    setPrevMonth,
    setNextYear,
    setPrevYear,
  };
}
