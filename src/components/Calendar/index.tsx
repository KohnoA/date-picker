import { memo, useContext } from 'react';

import { ActiveDayContext, ConfigContext } from '@/context';
import { withTodos } from '@/hocs';
import { useCalendar } from '@/hooks';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

interface CalendarProps {
  showCalendar: boolean;
}

export const Calendar = memo(
  withTodos((props: CalendarProps) => {
    const { showCalendar } = props;

    const { activeDay, setActiveDay } = useContext(ActiveDayContext);
    const { weekStart, showWeekends, min, max, view } = useContext(ConfigContext);
    const { year, month, week, days, next, prev, nextYear, prevYear } = useCalendar({
      activeDay,
      weekStart,
      min,
      max,
      view,
    });
    const showClearButton = !!activeDay;

    const clearCalendar = () => setActiveDay(null);

    return (
      <CalendarContainer $showCalendar={showCalendar} $showClearButton={showClearButton}>
        <CalendarHeader
          year={year}
          month={month}
          week={week}
          setNext={next}
          setPrev={prev}
          setNextYear={nextYear}
          setPrevYear={prevYear}
        />
        <WeekDaysName />

        <DaysList $showWeekends={!!showWeekends}>
          {days.map((day) => (
            <CalendarCell key={day.data.timestamp} dayData={day} />
          ))}
        </DaysList>

        {showClearButton && <ClearButton onClear={clearCalendar} />}
      </CalendarContainer>
    );
  }),
);
