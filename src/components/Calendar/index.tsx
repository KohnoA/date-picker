import { useCallback, useContext, useState } from 'react';

import { TodoList } from '@/components/TodoList';
import { ConfigContext } from '@/context';
import { useCalendar } from '@/hooks';
import { type DayWithTodoControls } from '@/types';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

const INITIAL_DAY_DATA = null;

interface CalendarProps {
  activeDay: number | null;
  showCalendar: boolean;
  setActiveDay: (timestamp: number) => void;
  onClear: () => void;
}

export const Calendar = (props: CalendarProps) => {
  const { activeDay, showCalendar, setActiveDay, onClear } = props;

  const { weekStart, showWeekends, min, max, view } = useContext(ConfigContext);
  const [showTodosOfDay, setShowTodosOfDay] = useState<DayWithTodoControls | null>(
    INITIAL_DAY_DATA,
  );
  const { year, month, week, days, next, prev, nextYear, prevYear } = useCalendar({
    activeDay,
    weekStart,
    min,
    max,
    view,
  });
  const showClearButton = !!activeDay;

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  const showTodoList = useCallback(
    (timestamp: number) => {
      const day = days.find(({ data }) => data.timestamp === timestamp) ?? INITIAL_DAY_DATA;

      setShowTodosOfDay(day);
    },
    [year, month, week],
  );

  const closeTodoList = () => setShowTodosOfDay(INITIAL_DAY_DATA);

  return (
    <>
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
          {days.map(({ data }) => (
            <CalendarCell
              {...data}
              key={data.timestamp}
              isActive={activeDay === data.timestamp}
              onClick={setActiveDayHandler}
              onDoubleClick={showTodoList}
            />
          ))}
        </DaysList>

        {showClearButton && <ClearButton onClear={onClear} />}
      </CalendarContainer>

      {showTodosOfDay && <TodoList day={showTodosOfDay} onClose={closeTodoList} />}
    </>
  );
};
