import { CalendarWeekStart } from '@/constants';

import { generateDaysData } from './generateDaysData';
import { generateEndOfPrevMonth } from './generateEndOfPrevMonth';

export function generateCalendarData(date: Date, weekStart?: CalendarWeekStart) {
  const NUMBER_OF_CALENDAR_ITEMS = 42;
  const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);

  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  const countDaysInCurrentMonth = currentDate.getDate();
  currentDate.setDate(1);

  const endOfPrevMonthData = generateEndOfPrevMonth(currentDate, weekStart);

  const currentMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
    countDaysInCurrentMonth,
    { isCurrentMonth: true },
  );

  const startOfNextMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
    NUMBER_OF_CALENDAR_ITEMS - (endOfPrevMonthData.length + currentMonthData.length),
  );

  return [...endOfPrevMonthData, ...currentMonthData, ...startOfNextMonthData];
}
