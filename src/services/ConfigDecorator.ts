import { ComponentType } from 'react';

import { RangeDatePicker } from '@/components/RangeDatePicker';
import { SimpleDatePicker } from '@/components/SimpleDatePicker';
import { CalendarView, DateFormats } from '@/constants';
import { withProviders, withRangeLogic, withSimpleLogic } from '@/hocs';
import { DatePickerConfigType } from '@/types';
import {
  revalidateConfig,
  revalidateDateRange,
  revalidateInitialDate,
  revalidateMinMax,
} from '@/utils';

const defaultConfig: Pick<DatePickerConfigType, 'showWeekends' | 'view' | 'format'> = {
  showWeekends: true,
  view: CalendarView.MONTH,
  format: DateFormats.PRIMARY,
};

export class ConfigDecorator {
  public DatePickerComponent: ComponentType;

  constructor(config: DatePickerConfigType) {
    const resultConfig = revalidateConfig(
      { ...defaultConfig, ...config },
      revalidateMinMax,
      revalidateInitialDate,
      revalidateDateRange,
    );

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
