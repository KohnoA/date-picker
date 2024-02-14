import { useCallback } from 'react';

import { useCalendar } from '@/hooks';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

interface CalendarProps {
  activeDay: number | null;
  showCalendar: boolean;
  setActiveDay: (timestamp: number) => void;
  onClear: () => void;
}

export const Calendar = ({ activeDay, showCalendar, setActiveDay, onClear }: CalendarProps) => {
  const { year, month, data, next, prev } = useCalendar(activeDay);
  const showClearButton = !!activeDay;

  const onClickCalendarCell = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  return (
    <CalendarContainer $showCalendar={showCalendar} $showClearButton={showClearButton}>
      <CalendarHeader month={month} year={year} onClickNext={next} onClickPrev={prev} />
      <WeekDaysName />

      <DaysList>
        {data.map((cellProps) => (
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
