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

  const { weekStart, showWeekends } = useContext(ConfigContext);
  const { currentDate, days, next, prev } = useCalendar(activeDay, weekStart);
  const [showTodosOfDay, setShowTodosOfDay] = useState<DayWithTodoControls | null>(
    INITIAL_DAY_DATA,
  );
  const showClearButton = !!activeDay;

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  const showTodoList = useCallback(
    (timestamp: number) => {
      const day = days.find(({ data }) => data.timestamp === timestamp) ?? INITIAL_DAY_DATA;

      setShowTodosOfDay(day);
    },
    [days],
  );

  const closeTodoList = () => setShowTodosOfDay(INITIAL_DAY_DATA);

  return (
    <>
      <CalendarContainer $showCalendar={showCalendar} $showClearButton={showClearButton}>
        <CalendarHeader date={currentDate} onClickNext={next} onClickPrev={prev} />
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
