import { memo } from 'react';

import { ConfigDecorator } from '@/services';
import { DatePickerConfigType } from '@/types';

export const DatePicker = memo((config: DatePickerConfigType) => {
  const { DatePickerComponent } = new ConfigDecorator(config);

  return <DatePickerComponent />;
});
