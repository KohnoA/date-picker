import { DatePickerProvider } from '@/components/DatePickerProvider';
import { DatePickerConfigType } from '@/types';

interface RangeDatePickerProps extends DatePickerConfigType {
  initialStartDate?: Date;
  initialEndDate?: Date;
}

export const RangeDatePicker = (props: RangeDatePickerProps) => {
  const { initialStartDate, initialEndDate, ...config } = props;

  return (
    <DatePickerProvider config={config}>
      <p>RangeDatePicker</p>
    </DatePickerProvider>
  );
};
