import { CalendarWeekStart } from '@/constants';

import { generateDaysData } from './generateDaysData';
import { getWeekDay } from './getWeekDay';

export function generateEndOfPrevMonth(currentDate: Date, weekStart?: CalendarWeekStart) {
  const countDaysInPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  ).getDate();

  const firstDayInCurrentMonth = getWeekDay(currentDate, weekStart);
  const showPrevMonthDays = firstDayInCurrentMonth !== 0;
  const startOfVisiblePrevMonth = countDaysInPrevMonth - firstDayInCurrentMonth + 1;

  return showPrevMonthDays
    ? generateDaysData(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        startOfVisiblePrevMonth,
        countDaysInPrevMonth,
      )
    : [];
}
