import { useState } from 'react';

import { GlobalStyles } from '@/styles';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

// import { TodoList } from '../TodoList';
import { Container } from './styled';

// const INITIAL_DATE = '';
const INITIAL_STATE_CALENDAR = false;

export const DatePicker = () => {
  // const [date, setDate] = useState<string>(INITIAL_DATE);
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_STATE_CALENDAR);

  const toggleCalendarHandler = () => setShowCalendar((prev) => !prev);

  return (
    <Container>
      <GlobalStyles />
      <DateInput onToggleCalendar={toggleCalendarHandler} />
      <Calendar showCalendar={showCalendar} />
      {/* <TodoList /> */}
    </Container>
  );
};
