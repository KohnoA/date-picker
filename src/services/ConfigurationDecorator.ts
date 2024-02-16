/* eslint-disable */

import { DEFAULT_COLOR_OPTIONS } from '@/constants/defaultColorOptions';
import { DatePickerConfigType } from '@/types';
import { generateCalendarData } from '@/utils';

export class ConfigurationDecorator {
  public config: DatePickerConfigType;

  constructor(config: DatePickerConfigType) {
    this.config = config;
  }

  public getColorOptions() {
    return this.config.colorOptions ?? DEFAULT_COLOR_OPTIONS;
  }

  public createCalendar(date?: Date) {
    generateCalendarData(date ?? new Date(Date.now()));
  }
}
