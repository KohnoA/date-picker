import { ComponentType } from 'react';

import { RangeDatePicker } from '@/components/RangeDatePicker';
import { SimpleDatePicker } from '@/components/SimpleDatePicker';
import { withProviders, withRangeLogic, withSimpleLogic } from '@/hocs';
import { DatePickerConfigType } from '@/types';

export class ConfigDecorator {
  public DatePickerComponent: ComponentType;

  constructor(config: DatePickerConfigType) {
    if (config.range) {
      this.createRangeDatePicker(config);
    } else {
      this.createSimpleDatePicker(config);
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
