import { DayFactory, holidays, TodosControlDecorator } from '@/services';

export function generateDaysData(
  year: number,
  month: number,
  start: number,
  end: number,
  options?: { isCurrentMonth: boolean },
) {
  return new Array(end - start + 1).fill(start).map((_, index) => {
    const date = new Date(year, month, start + index);
    const day = new DayFactory(date, options?.isCurrentMonth);

    const dayWithTodoControls = new TodosControlDecorator(holidays.checkDay(day));
    dayWithTodoControls.loadTodos();

    return dayWithTodoControls;
  });
}
