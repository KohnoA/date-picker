import { WEEK_DAYS_NAME } from '@/constants';

export interface DayType {
  day: number;
  weekday: (typeof WEEK_DAYS_NAME)[number];
  timestamp: number;
  todos: TodoType[];
  isWeekend: boolean;
  isHoliday: boolean;
  isCurrentMonth: boolean;
}

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}
