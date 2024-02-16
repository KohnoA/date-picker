import { useState } from 'react';

import { MONTH_NAMES } from '@/constants';
import { generateCalendarData } from '@/utils';

const INITIAL_DATE = new Date(Date.now());

export function useCalendar(activeDay: number | null) {
  const [prevActiveDay, setPrevActiveDay] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(
    activeDay ? new Date(activeDay) : INITIAL_DATE,
  );

  if (activeDay !== prevActiveDay) {
    if (activeDay !== null) setCurrentDate(new Date(activeDay));
    setPrevActiveDay(activeDay);
  }

  const year = currentDate.getFullYear();
  const month = MONTH_NAMES[currentDate.getMonth()];

  const days = generateCalendarData(currentDate);

  const next = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prev = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  return { days, year, month, next, prev };
}
