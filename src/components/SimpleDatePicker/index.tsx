import { memo } from 'react';

import { SimpleCalendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { useCalendarToggle, useDateInput } from '@/hooks';
import { DatePickerContainer } from '@/styles';

export const SimpleDatePicker = memo(() => {
  const { dateValue, error, onChange, onClear } = useDateInput();
  const { showCalendar, toggleVisibility } = useCalendarToggle();

  return (
    <DatePickerContainer data-testid="simple-date-picker">
      <DateInput
        value={dateValue}
        error={error}
        onChange={onChange}
        onClear={onClear}
        toggleCalendar={toggleVisibility}
      />

      <SimpleCalendar showCalendar={showCalendar} />
    </DatePickerContainer>
  );
});
