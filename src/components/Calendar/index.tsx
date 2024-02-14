import { useCallback, useState } from 'react';

import { TodoList } from '@/components/TodoList';
import { useCalendar } from '@/hooks';
import { DayType } from '@/types';

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
  const [dayTodos, setDayTodos] = useState<DayType | null>(null);
  const showClearButton = !!activeDay;

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  const showTodoList = (timestamp: number) => {
    const dayData = data.find((day) => day.timestamp === timestamp);

    if (dayData) setDayTodos(dayData);
  };

  const closeTodoList = () => setDayTodos(null);

  return (
    <>
      <CalendarContainer $showCalendar={showCalendar} $showClearButton={showClearButton}>
        <CalendarHeader month={month} year={year} onClickNext={next} onClickPrev={prev} />
        <WeekDaysName />

        <DaysList>
          {data.map((cellProps) => (
            <CalendarCell
              {...cellProps}
              key={cellProps.timestamp}
              isActive={activeDay === cellProps.timestamp}
              onClick={setActiveDayHandler}
              onDoubleClick={showTodoList}
            />
          ))}
        </DaysList>

        {showClearButton && <ClearButton onClear={onClear} />}
      </CalendarContainer>

      {dayTodos && <TodoList dayData={dayTodos} onClose={closeTodoList} />}
    </>
  );
};
