import { CalendarView, CalendarWeekStart } from '@/constants';

import { ThemeType } from './ThemeType';

export interface DatePickerConfigType {
  label?: string;
  showHolidays?: boolean;
  showWeekends?: boolean;
  view?: CalendarView;
  min?: Date;
  max?: Date;
  weekStart?: CalendarWeekStart;
  customTheme?: Partial<ThemeType>;
}
