import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { CalendarView } from '@/constants';
import { UseCalendarOptionsType } from '@/types';
import {
  canGoNextMonth,
  canGoNextWeek,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevWeek,
  canGoPrevYear,
  countWeeksInMonth,
  generateCalendarData,
  getInitialState,
  sliceOnWeeks,
} from '@/utils';

const INITIAL_WEEK_VALUE = 1;

export function useCalendar(options: UseCalendarOptionsType) {
  const { activeDay, view, weekStart, min, max } = options;

  const prevActiveDayRef = useRef<number | null>(null);
  const [week, setWeek] = useState(INITIAL_WEEK_VALUE);
  const [currentDate, setCurrentDate] = useState(getInitialState(activeDay, min, max));

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const viewOnWeeks = view === CalendarView.WEEK;

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [month, year, weekStart],
  );

  const setNextWeek = useCallback(() => {
    if (!canGoNextWeek(year, month, week, weekStart, max)) return;

    const maxWeeksInMonth = countWeeksInMonth(currentDate, weekStart);
    const newWeekValue = week === maxWeeksInMonth ? INITIAL_WEEK_VALUE : week + 1;

    setWeek(newWeekValue);

    if (newWeekValue !== INITIAL_WEEK_VALUE) return;
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }, [year, month, week, weekStart, max]);

  const setPrevWeek = useCallback(() => {
    if (!canGoPrevWeek(year, month, week, weekStart, min)) return;

    if (week === INITIAL_WEEK_VALUE) {
      const newCurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);

      setWeek(countWeeksInMonth(newCurrentDate, weekStart));
      setCurrentDate(newCurrentDate);
    } else {
      setWeek(week - 1);
    }
  }, [year, month, week, weekStart, min]);

  const setNextMonth = useCallback(() => {
    if (!canGoNextMonth(year, month, max)) return;
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }, [year, month, max]);

  const setPrevMonth = useCallback(() => {
    if (!canGoPrevMonth(year, month, min)) return;
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  }, [year, month, min]);

  const setNextYear = useCallback(() => {
    if (!canGoNextYear(year, month, max)) return;
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  }, [year, month, max]);

  const setPrevYear = useCallback(() => {
    if (!canGoPrevYear(year, month, min)) return;
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
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
