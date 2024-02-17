import { useMemo, useRef, useState } from 'react';

import { CalendarWeekStart } from '@/constants';
import { canRewindNext, canRewindPrev, generateCalendarData } from '@/utils';

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

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const days = useMemo(
    () => generateCalendarData(currentDate, weekStart),
    [currentMonth, currentYear, weekStart],
  );

  const next = () => {
    if (!canRewindNext(currentDate, max)) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prev = () => {
    if (!canRewindPrev(currentDate, min)) return;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  return { currentDate, days, next, prev };
}
