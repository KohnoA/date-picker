import { ComponentType } from 'react';

import { RangeDatePicker } from '@/components/RangeDatePicker';
import { SimpleDatePicker } from '@/components/SimpleDatePicker';
import { CalendarView } from '@/constants';
import { withProviders, withRangeLogic, withSimpleLogic } from '@/hocs';
import { DatePickerConfigType } from '@/types';

const defaultConfig: Pick<DatePickerConfigType, 'showWeekends' | 'view'> = {
  showWeekends: true,
  view: CalendarView.MONTH,
};

export class ConfigDecorator {
  public DatePickerComponent: ComponentType;

  constructor(config: DatePickerConfigType) {
    const resultConfig = { ...defaultConfig, ...config };

    if (config.range) {
      this.createRangeDatePicker(resultConfig);
    } else {
      this.createSimpleDatePicker(resultConfig);
    }
  }

  private createRangeDatePicker(config: DatePickerConfigType) {
    const { initialStartDate, initialEndDate } = config;

    this.DatePickerComponent = withProviders(
      withRangeLogic(RangeDatePicker, initialStartDate, initialEndDate),
      config,
    );
  }

  private createSimpleDatePicker(config: DatePickerConfigType) {
    const { initialDate } = config;

    this.DatePickerComponent = withProviders(
      withSimpleLogic(SimpleDatePicker, initialDate),
      config,
    );
  }
}
