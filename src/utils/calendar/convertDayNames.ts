import { CalendarWeekStart, NAMES_OF_WEEKENDS, WEEK_DAYS_NAME } from '@/constants';

export function convertDayNames(weekStart?: CalendarWeekStart, showWeekends?: boolean) {
  let weekDaysName =
    weekStart === CalendarWeekStart.MONDAY
      ? [...WEEK_DAYS_NAME.slice(1), ...WEEK_DAYS_NAME.slice(0, 1)]
      : WEEK_DAYS_NAME;

  if (!showWeekends) {
    weekDaysName = weekDaysName.filter((dayName) => !NAMES_OF_WEEKENDS.includes(dayName));
  }

  return weekDaysName;
}
