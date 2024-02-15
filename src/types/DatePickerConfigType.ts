import { CalendarView, CalendarWeekStart } from '@/constants';

import { ColorOptionsType } from './ColorOptionsType';

export interface DatePickerConfigType {
  showHolidays?: boolean;
  showWeekends?: boolean;
  view?: CalendarView;
  min?: Date;
  max?: Date;
  weekStart: CalendarWeekStart;
  colorOptions?: ColorOptionsType;
}
