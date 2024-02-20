import { ConfigDecorator } from '@/services';
import { DatePickerConfigType } from '@/types';

export const DatePicker = (config: DatePickerConfigType) => {
  const { DatePickerComponent } = new ConfigDecorator(config);

  return <DatePickerComponent />;
};
