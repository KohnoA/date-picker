import { memo, useContext } from 'react';

import { ConfigContext, TodosContext } from '@/context';
import { DayWithTodoControls } from '@/types';

import { CalendarCellContainer, TodosIndicator } from './styled';

interface CalendarCellProps {
  dayData: DayWithTodoControls;
  activeDay: number | null;
  rangeEndDay?: number | null;
  onClick: (timestamp: number) => void;
}

export const CalendarCell = memo((props: CalendarCellProps) => {
  const { dayData, activeDay, rangeEndDay, onClick } = props;
  const { day, timestamp, isCurrentMonth, isHoliday, isWeekend, todos } = dayData.data;

  const { showHolidays, showWeekends, min, max } = useContext(ConfigContext);
  const { openTodos } = useContext(TodosContext);

  const isLessMinDate = min ? timestamp < min.getTime() : false;
  const isMoreMaxDate = max ? timestamp > max.getTime() : false;
  const canSelectCell = isCurrentMonth && !isLessMinDate && !isMoreMaxDate;
  const isActive = activeDay === timestamp;
  const hasTodos = !!todos.length;

  const onClickHandler = () => onClick(timestamp);

  const onDoubleClickHandler = () => openTodos(dayData);

  return (
    <CalendarCellContainer
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      $canSelect={canSelectCell}
      $isActive={isActive}
      $isRangeStart={isActive && !!rangeEndDay}
      $isRangeMiddle={
        !!activeDay && !!rangeEndDay && timestamp > activeDay && timestamp < rangeEndDay
      }
      $isRangeEnd={timestamp === rangeEndDay}
      $isHoliday={!!(isHoliday && showHolidays)}
      $hidden={!!(isWeekend && !showWeekends)}
    >
      <TodosIndicator $hasTodos={hasTodos} />
      {day}
    </CalendarCellContainer>
  );
});
