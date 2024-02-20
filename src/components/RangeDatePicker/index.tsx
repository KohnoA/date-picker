import { RangeCalendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { useCalendarToggle, useRangeDateInput } from '@/hooks';
import { DatePickerContainer } from '@/styles';

export const RangeDatePicker = () => {
  const { rangeValue, error, onChange, onClear } = useRangeDateInput();
  const { showCalendar, toggleVisibility } = useCalendarToggle();

  return (
    <DatePickerContainer>
      <DateInput
        value={rangeValue}
        error={error}
        onChange={onChange}
        onClear={onClear}
        toggleCalendar={toggleVisibility}
      />

      <RangeCalendar showCalendar={showCalendar} />
    </DatePickerContainer>
  );
};
