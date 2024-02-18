import { CalendarWeekStart } from '@/constants';

export function countWeeksInMonth(date: Date, weekStart?: CalendarWeekStart) {
  const NUMBER_OF_DAYS_IN_WEEK = 7;

  const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekDay =
    weekStart === CalendarWeekStart.MONDAY ? currentDate.getDay() - 1 : currentDate.getDay();

  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  const countDaysInCurrentMonth = currentDate.getDate();

  return Math.ceil((countDaysInCurrentMonth + weekDay) / NUMBER_OF_DAYS_IN_WEEK);
}
