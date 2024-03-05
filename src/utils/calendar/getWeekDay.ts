import { CalendarWeekStart } from '@/constants';

export function getWeekDay(date: Date, weekStart?: CalendarWeekStart) {
  const day = date.getDay();

  if (weekStart === CalendarWeekStart.MONDAY) {
    return day === 0 ? day + 6 : day - 1;
  }

  return day;
}
