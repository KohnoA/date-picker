import { CalendarWeekStart } from '@/constants';

import { generateDaysData } from './generateDaysData';

export function generateEndOfPrevMonth(currentDate: Date, weekStart?: CalendarWeekStart) {
  const countDaysInPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  ).getDate();

  let firstDayInCurrentMonth: number;

  if (weekStart === CalendarWeekStart.MONDAY) {
    firstDayInCurrentMonth = currentDate.getDay() !== 0 ? currentDate.getDay() - 1 : 6;
  } else {
    firstDayInCurrentMonth = currentDate.getDay();
  }

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
