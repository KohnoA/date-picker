import { useCallback, useMemo, useState } from 'react';

import { MONTH_NAMES } from '@/constants';
import { generateCalendarData } from '@/utils';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

const INITIAL_DATE = new Date(Date.now());

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(INITIAL_DATE);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const currentYear = currentDate.getFullYear();
  const currentMonth = MONTH_NAMES[currentDate.getMonth()];
  const showClearButton = !!activeDay;

  const calendarData = useMemo(() => generateCalendarData(currentDate), [currentDate]);

  const onClickNextHandler = useCallback(() => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  }, []);

  const onClickPrevHandler = useCallback(() => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  }, []);

  const onClickCalendarCell = (timestamp: number) => {
    setActiveDay(timestamp);
  };

  const onClearCalendar = () => setActiveDay(null);

  return (
    <CalendarContainer $showClearButton={showClearButton}>
      <CalendarHeader
        month={currentMonth}
        year={currentYear}
        onClickNext={onClickNextHandler}
        onClickPrev={onClickPrevHandler}
      />
      <WeekDaysName />

      <DaysList>
        {calendarData.map((cellProps) => (
          <CalendarCell
            key={cellProps.timestamp}
            {...cellProps}
            isActive={activeDay === cellProps.timestamp}
            onClick={onClickCalendarCell}
          />
        ))}
      </DaysList>

      {showClearButton && <ClearButton onClear={onClearCalendar} />}
    </CalendarContainer>
  );
};
