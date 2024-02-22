import { memo } from 'react';

import { RangeCalendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { useCalendarToggle, useRangeDateInput } from '@/hooks';
import { DatePickerContainer } from '@/styles';

export const RangeDatePicker = memo(() => {
  const { rangeValue, error, onChange, onClear } = useRangeDateInput();
  const { showCalendar, toggleVisibility } = useCalendarToggle();

  return (
    <DatePickerContainer data-testid="range-date-picker">
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
});
