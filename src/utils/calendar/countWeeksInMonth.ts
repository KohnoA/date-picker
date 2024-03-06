import { CalendarWeekStart } from '@/constants';

import { getWeekDay } from './getWeekDay';

export function countWeeksInMonth(date: Date, weekStart?: CalendarWeekStart) {
  const NUMBER_OF_DAYS_IN_WEEK = 7;

  const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDayOfMonth = getWeekDay(currentDate, weekStart);

  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  const countDaysInCurrentMonth = currentDate.getDate();

  return Math.ceil((countDaysInCurrentMonth + startDayOfMonth) / NUMBER_OF_DAYS_IN_WEEK);
}
