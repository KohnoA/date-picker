import { useCallback, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { DatePickerProvider } from '@/components/DatePickerProvider';
import { DatePickerConfigType } from '@/types';

import { Container } from './styled';

const INITIAL_CALENDAR_VISIBILITY = false;
const INITIAL_ACTIVE_DAY_VALUE = null;

interface DatePickerProps extends DatePickerConfigType {
  initialDate?: Date;
}

export const DatePicker = ({ initialDate, ...config }: DatePickerProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const [activeDay, setActiveDay] = useState<number | null>(
    initialDate ? initialDate.getTime() : INITIAL_ACTIVE_DAY_VALUE,
  );

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  const resetActiveDayHandler = useCallback(() => {
    setActiveDay(INITIAL_ACTIVE_DAY_VALUE);
  }, []);

  return (
    <DatePickerProvider config={config}>
      <Container data-testid="date-picker">
        <DateInput
          activeDay={activeDay}
          setActiveDay={setActiveDayHandler}
          resetActiveDay={resetActiveDayHandler}
          toggleCalendar={toggleCalendarVisibility}
        />

        <Calendar
          activeDay={activeDay}
          showCalendar={showCalendar}
          setActiveDay={setActiveDayHandler}
          onClear={resetActiveDayHandler}
        />
      </Container>
    </DatePickerProvider>
  );
};
