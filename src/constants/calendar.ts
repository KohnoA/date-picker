export enum CalendarView {
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum CalendarWeekStart {
  MONDAY = 'Monday',
  SUNDAY = 'Sunday',
}

export const WEEK_DAYS_NAME = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;
export const NAMES_OF_WEEKENDS = ['Su', 'Sa'];

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;
