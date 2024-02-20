import { useCallback, useState } from 'react';

import { SimpleCalendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { useDateInput } from '@/hooks';

import { Container } from './styled';

const INITIAL_CALENDAR_VISIBILITY = false;

export const SimpleDatePicker = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const { dateValue, error, onChange, onClear } = useDateInput();

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  return (
    <Container data-testid="date-picker">
      <DateInput
        value={dateValue}
        error={error}
        onChange={onChange}
        onClear={onClear}
        toggleCalendar={toggleCalendarVisibility}
      />

      <SimpleCalendar showCalendar={showCalendar} />
    </Container>
  );
};
