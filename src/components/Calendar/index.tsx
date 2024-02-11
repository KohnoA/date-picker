import { useMemo, useState } from 'react';

import { MONTH_NAMES } from '@/constants';
import { generateCalendarData } from '@/utils';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

const INITIAL_DATE = new Date(Date.now());

export const Calendar = () => {
  const [currentDate] = useState<Date>(INITIAL_DATE);

  const currentYear = currentDate.getFullYear();
  const currentMonth = MONTH_NAMES[currentDate.getMonth()];

  const calendarData = useMemo(() => generateCalendarData(currentDate), [currentDate]);

  const onClickNextHandler = () => {};
  const onClickPrevHandler = () => {};

  return (
    <CalendarContainer>
      <CalendarHeader
        month={currentMonth}
        year={currentYear}
        onClickNext={onClickNextHandler}
        onClickPrev={onClickPrevHandler}
      />
      <WeekDaysName />

      <DaysList>
        {calendarData.map((cellProps) => (
          <CalendarCell {...cellProps} />
        ))}
      </DaysList>
    </CalendarContainer>
  );
};
