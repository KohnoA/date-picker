import { CalendarWeekStart } from '@/constants';

const NUMBER_OF_DAYS_IN_WEEK = 7;

export function canGoPrevMonth(year: number, month: number, min?: Date) {
  if (!min) return true;

  const firstDayOfMonthDate = new Date(year, month, 1);

  return firstDayOfMonthDate.getTime() > min.getTime();
}

export function canGoNextMonth(year: number, month: number, max?: Date) {
  if (!max) return true;

  const lastDayOfMonthDate = new Date(year, month + 1, 0);

  return lastDayOfMonthDate.getTime() < max.getTime();
}

export function canGoPrevYear(year: number, month: number, min?: Date) {
  if (!min) return true;

  const prevYear = new Date(year - 1, month, 1);

  return prevYear.getTime() > min.getTime();
}

export function canGoNextYear(year: number, month: number, max?: Date) {
  if (!max) return true;

  const nextYear = new Date(year + 1, month, 1);

  return nextYear.getTime() < max.getTime();
}

export function canGoNextWeek(
  year: number,
  month: number,
  week: number,
  weekStart?: CalendarWeekStart,
  max?: Date,
) {
  if (!max || !weekStart) return true;

  const weekStartWithMonday = weekStart === CalendarWeekStart.MONDAY;
  const startMonth = new Date(year, month, 1);
  const endMonth = new Date(year, month + 1, 0);
  const countDaysInMonth = endMonth.getDate();
  const endMonthWeekDay =
    NUMBER_OF_DAYS_IN_WEEK - endMonth.getDay() - (weekStartWithMonday ? 2 : 1);
  const startMontWeekDay = weekStartWithMonday ? startMonth.getDay() - 1 : startMonth.getDay();

  let lastNumberOfWeek = week * NUMBER_OF_DAYS_IN_WEEK - startMontWeekDay;

  if (lastNumberOfWeek > countDaysInMonth) {
    lastNumberOfWeek -= endMonthWeekDay;
  }

  const dateWithLastNumberOfWeek = new Date(year, month, lastNumberOfWeek);

  return dateWithLastNumberOfWeek.getTime() < max.getTime();
}

export function canGoPrevWeek(
  year: number,
  month: number,
  week: number,
  weekStart?: CalendarWeekStart,
  min?: Date,
) {
  if (!min || !weekStart) return true;

  const weekStartWithMonday = weekStart === CalendarWeekStart.MONDAY;
  const currentDate = new Date(year, month, 1);
  const weekDay = weekStartWithMonday ? currentDate.getDay() - 1 : currentDate.getDay();

  let firstNumberOfWeek = week * NUMBER_OF_DAYS_IN_WEEK - (NUMBER_OF_DAYS_IN_WEEK - 1) - weekDay;

  if (firstNumberOfWeek < 1) {
    firstNumberOfWeek += weekDay;
  }

  const dateWithLastNumberOfWeek = new Date(year, month, firstNumberOfWeek);

  return dateWithLastNumberOfWeek.getTime() > min.getTime();
}
