import { useCallback, useState } from 'react';

import { GlobalStyles } from '@/styles';
import { dateStringHasError, isValidDateInputValue } from '@/utils';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

import { errorMassage } from './config';
// import { TodoList } from '../TodoList';
import { Container, Error } from './styled';

const INITIAL_DATE_VALUE = '';
const INITIAL_CALENDAR_VISIBILITY = false;
const INITIAL_ERROR_STATUS = false;

export const DatePicker = () => {
  const [date, setDate] = useState<string>(INITIAL_DATE_VALUE);
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const [hasError, setHasError] = useState<boolean>(INITIAL_ERROR_STATUS);

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  const onChangeDateHandler = useCallback((value: string) => {
    if (isValidDateInputValue(value)) {
      setDate(value);
      setHasError(dateStringHasError(value));
    }
  }, []);

  const clearDateInputHandler = useCallback(() => {
    setDate(INITIAL_DATE_VALUE);
    setHasError(false);
  }, []);

  return (
    <Container>
      <GlobalStyles />
      <DateInput
        value={date}
        hasError={hasError}
        onChange={onChangeDateHandler}
        onClear={clearDateInputHandler}
        onToggleCalendar={toggleCalendarVisibility}
      />

      {hasError && <Error>{errorMassage}</Error>}

      <Calendar showCalendar={showCalendar} />
      {/* <TodoList /> */}
    </Container>
  );
};
