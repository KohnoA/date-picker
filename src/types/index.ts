import { WEEK_DAYS_NAME } from '@/constants';

export interface DayType {
  day: number;
  weekday: (typeof WEEK_DAYS_NAME)[number];
  timestamp: number;
  todos: TodoType[];
  isWeekend: boolean;
  isHoliday: boolean | null;
  isCurrentMonth: boolean;
}

export interface DayWithTodoControls {
  data: DayType;
  load: () => void;
  removeAll: () => void;
  save: (todos: TodoType[]) => void;
  update: (todos: TodoType[]) => void;
}

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}
