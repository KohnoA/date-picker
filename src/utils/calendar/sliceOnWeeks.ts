import { DayWithTodoControls } from '@/types';

export function sliceOnWeeks(days: DayWithTodoControls[], week: number) {
  const NUMBER_DAYS_IN_WEEK = 7;

  return days.slice(NUMBER_DAYS_IN_WEEK * week - NUMBER_DAYS_IN_WEEK, NUMBER_DAYS_IN_WEEK * week);
}
