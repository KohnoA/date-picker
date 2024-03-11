import { WEEK_DAYS_NAME } from '@/constants';

import { TodoType } from '../todos';

export interface DayType {
  day: number;
  weekday: (typeof WEEK_DAYS_NAME)[number];
  timestamp: number;
  todos: TodoType[];
  isWeekend: boolean;
  isHoliday: boolean | null;
  isCurrentMonth: boolean;
}
