import { useCallback, useMemo, useState } from 'react';

import { MONTH_NAMES } from '@/constants';
import { generateCalendarData } from '@/utils';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

const INITIAL_DATE = new Date(Date.now());

interface CalendarProps {
  activeDay: number | null;
  showCalendar: boolean;
  setActiveDay: (timestamp: number) => void;
  onClear: () => void;
}

export const Calendar = ({ activeDay, showCalendar, setActiveDay, onClear }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    activeDay ? new Date(activeDay) : INITIAL_DATE,
  );
  const [prevActiveDay, setPrevActiveDay] = useState<number | null>(null);

  if (activeDay !== prevActiveDay) {
    if (activeDay !== null) setCurrentDate(new Date(activeDay));
    setPrevActiveDay(activeDay);
  }

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

  const onClickCalendarCell = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  return (
    <CalendarContainer $showCalendar={showCalendar} $showClearButton={showClearButton}>
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
            {...cellProps}
            key={cellProps.timestamp}
            isActive={activeDay === cellProps.timestamp}
            onClick={onClickCalendarCell}
          />
        ))}
      </DaysList>

      {showClearButton && <ClearButton onClear={onClear} />}
    </CalendarContainer>
  );
};
