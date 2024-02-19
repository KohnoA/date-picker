import { memo, useContext } from 'react';

import { ActiveDayContext, ConfigContext, TodosContext } from '@/context';
import { DayWithTodoControls } from '@/types';

import { CalendarCellContainer, TodosIndicator } from './styled';

interface CalendarCallProps {
  dayData: DayWithTodoControls;
}

export const CalendarCell = memo(({ dayData }: CalendarCallProps) => {
  const { day, timestamp, isCurrentMonth, isHoliday, isWeekend, todos } = dayData.data;

  const { activeDay, setActiveDay } = useContext(ActiveDayContext);
  const { showHolidays, showWeekends, min, max } = useContext(ConfigContext);
  const { openTodos } = useContext(TodosContext);

  const isLessMinDate = min ? timestamp < min.getTime() : false;
  const isMoreMaxDate = max ? timestamp > max.getTime() : false;
  const canSelectCell = isCurrentMonth && !isLessMinDate && !isMoreMaxDate;
  const isActive = activeDay === timestamp;
  const hasTodos = !!todos.length;

  const onClickHandler = () => setActiveDay(timestamp);

  const onDoubleClickHanlder = () => openTodos(dayData);

  return (
    <CalendarCellContainer
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHanlder}
      $canSelect={canSelectCell}
      $isActive={isActive}
      $isHoliday={!!(isHoliday && showHolidays)}
      $hidden={!!(isWeekend && !showWeekends)}
    >
      <TodosIndicator $hasTodos={hasTodos} />
      {day}
    </CalendarCellContainer>
  );
});
