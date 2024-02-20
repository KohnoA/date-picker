import { useCallback, useMemo, useState } from 'react';

import { RangeCalendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { DatePickerProvider } from '@/components/DatePickerProvider';
import { ActiveRangeContext } from '@/context';
import { useRangeDateInput } from '@/hooks';
import { DatePickerConfigType } from '@/types';

import { Container } from './styled';

const INITIAL_CALENDAR_VISIBILITY = false;
const INITIAL_ACTIVE_DAY_VALUE = null;

interface RangeDatePickerProps extends DatePickerConfigType {
  initialStartDate?: Date;
  initialEndDate?: Date;
}

const OwnRangeDatePicker = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const { rangeValue, error, onChange, onClear } = useRangeDateInput();

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  return (
    <Container>
      <DateInput
        value={rangeValue}
        error={error}
        onChange={onChange}
        onClear={onClear}
        toggleCalendar={toggleCalendarVisibility}
      />

      <RangeCalendar showCalendar={showCalendar} />
    </Container>
  );
};

export const RangeDatePicker = (props: RangeDatePickerProps) => {
  const { initialStartDate, initialEndDate, ...config } = props;

  const [activeStartDay, setActiveStartDay] = useState<number | null>(
    initialStartDate?.getTime() ?? INITIAL_ACTIVE_DAY_VALUE,
  );
  const [activeEndDay, setActiveEndDay] = useState<number | null>(
    initialEndDate?.getTime() ?? INITIAL_ACTIVE_DAY_VALUE,
  );

  const resetActiveRange = () => {
    setActiveStartDay(INITIAL_ACTIVE_DAY_VALUE);
    setActiveEndDay(INITIAL_ACTIVE_DAY_VALUE);
  };

  const ActiveRangeContextObj = useMemo(
    () => ({ activeStartDay, activeEndDay, setActiveStartDay, setActiveEndDay, resetActiveRange }),
    [activeStartDay, activeEndDay],
  );

  return (
    <DatePickerProvider config={config}>
      <ActiveRangeContext.Provider value={ActiveRangeContextObj}>
        <OwnRangeDatePicker />
      </ActiveRangeContext.Provider>
    </DatePickerProvider>
  );
};
