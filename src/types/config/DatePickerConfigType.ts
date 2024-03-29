import { CalendarView, CalendarWeekStart, DateFormats } from '@/constants';

import { ThemeType } from './ThemeType';

export interface DatePickerConfigType {
  format?: DateFormats;
  range?: boolean;
  initialDate?: Date;
  initialStartDate?: Date;
  initialEndDate?: Date;
  label?: string;
  showHolidays?: boolean;
  showWeekends?: boolean;
  view?: CalendarView;
  min?: Date;
  max?: Date;
  weekStart?: CalendarWeekStart;
  customTheme?: Partial<ThemeType>;
  onChange?: (value: string) => void;
}
