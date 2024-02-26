import { DayFactory, holidays, TodosControlDecorator } from '@/services';

export function generateDaysData(
  year: number,
  month: number,
  start: number,
  end: number,
  options?: { isCurrentMonth: boolean },
) {
  if (end < start) {
    throw new Error('Invalid range for days');
  }

  return new Array(end - start + 1).fill(start).map((_, index) => {
    const date = new Date(year, month, start + index);
    const day = new DayFactory(date, options?.isCurrentMonth);

    day.isHoliday = holidays.checkDay(date.getDate(), date.getMonth());

    const dayWithTodoControls = new TodosControlDecorator(day);
    dayWithTodoControls.loadTodos();

    return dayWithTodoControls;
  });
}
