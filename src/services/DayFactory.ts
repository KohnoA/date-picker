import { NAMES_OF_WEEKENDS, WEEK_DAYS_NAME } from '@/constants';
import { DayType, TodoType } from '@/types';

export class DayFactory implements DayType {
  public day: number;
  public timestamp: number;
  public weekday: (typeof WEEK_DAYS_NAME)[number];
  public isWeekend: boolean;
  public isCurrentMonth: boolean;
  public isHoliday: boolean;
  public todos: TodoType[];

  constructor(date: Date, isCurrentMonth?: boolean) {
    this.day = date.getDate();
    this.timestamp = date.getTime();
    this.weekday = WEEK_DAYS_NAME[date.getDay()];
    this.isWeekend = NAMES_OF_WEEKENDS.includes(this.weekday);
    this.isCurrentMonth = isCurrentMonth ?? false;
    this.todos = [];
  }
}
