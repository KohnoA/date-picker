import { CalendarView, CalendarWeekStart } from '@/constants';

export interface UseCalendarOptionsType {
  activeDay: number | null;
  view?: CalendarView;
  weekStart?: CalendarWeekStart;
  min?: Date;
  max?: Date;
}
