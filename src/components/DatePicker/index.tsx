import { useCallback, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { ConfigContext } from '@/context';
// import { ConfigurationDecorator } from '@/services';
import { GlobalStyles } from '@/styles';
import { DatePickerConfigType } from '@/types';
import { dateStringHasError, isValidDateInputValue, timestampToDateFormat } from '@/utils';

import { errorMassage } from './config';
import { Container, Error } from './styled';

const INITIAL_DATE_VALUE = '';
const INITIAL_CALENDAR_VISIBILITY = false;
const INITIAL_ERROR_STATUS = false;
const INITIAL_ACTIVE_DAY_VALUE = null;
const FULL_DATE_LENGTH = 10;

interface DatePickerProps extends DatePickerConfigType {
  label?: string;
  initialDate?: Date;
}

export const DatePicker = (props: DatePickerProps) => {
  const { label, initialDate, ...config } = props;
  const initialDateTimestamp = initialDate?.getTime();
  // const datePicker = new ConfigurationDecorator(config);

  const [dateValue, setDateValue] = useState<string>(
    initialDateTimestamp ? timestampToDateFormat(initialDateTimestamp) : INITIAL_DATE_VALUE,
  );
  const [activeDay, setActiveDay] = useState<number | null>(
    initialDateTimestamp ?? INITIAL_ACTIVE_DAY_VALUE,
  );
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const [hasError, setHasError] = useState<boolean>(INITIAL_ERROR_STATUS);

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  const onChangeDateHandler = useCallback((value: string) => {
    if (!isValidDateInputValue(value)) return;
    const isIncorrectValue = dateStringHasError(value);
    const isFullDateEntered = value.length === FULL_DATE_LENGTH;

    setDateValue(value);
    setHasError(isIncorrectValue);

    if (isFullDateEntered && !isIncorrectValue) {
      setActiveDay(new Date(value).getTime());
    } else {
      setActiveDay(INITIAL_ACTIVE_DAY_VALUE);
    }
  }, []);

  const resetActiveDay = useCallback(() => {
    setActiveDay(INITIAL_ACTIVE_DAY_VALUE);
    setDateValue(INITIAL_DATE_VALUE);
    setHasError(INITIAL_ERROR_STATUS);
  }, []);

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
    setDateValue(timestampToDateFormat(timestamp));
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      <Container>
        <GlobalStyles />

        <DateInput
          label={label}
          value={dateValue}
          hasError={hasError}
          onChange={onChangeDateHandler}
          onClear={resetActiveDay}
          onToggleCalendar={toggleCalendarVisibility}
        />

        {hasError && <Error>{errorMassage}</Error>}

        <Calendar
          activeDay={activeDay}
          showCalendar={showCalendar}
          setActiveDay={setActiveDayHandler}
          onClear={resetActiveDay}
        />
      </Container>
    </ConfigContext.Provider>
  );
};
