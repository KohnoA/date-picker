import { WEEK_DAYS_NAME } from '@/constants';

export interface DayType {
  day: number;
  weekDay: typeof WEEK_DAYS_NAME;
  timestamp: number;
  todos: null;
  isWeekend: boolean;
  isHoliday: boolean;
  isCurrentMonth: boolean;
}
