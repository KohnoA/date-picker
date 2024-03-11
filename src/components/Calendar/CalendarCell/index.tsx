import { memo, useContext } from 'react';

import { TodosContext } from '@/context';
import { useCalendarCell } from '@/hooks';

import { CalendarCellContainer, TodosClue, TodosIndicator } from './styled';
import { CalendarCellProps } from './types';

export const CalendarCell = memo((props: CalendarCellProps) => {
  const { dayData, activeDay, rangeEndDay, onClick } = props;
  const { day, timestamp } = dayData.data;

  const { openTodos } = useContext(TodosContext);
  const {
    canSelectCell,
    isActive,
    isRangeStart,
    isRangeMiddle,
    isRangeEnd,
    showHoliday,
    isHidden,
    hasTodos,
  } = useCalendarCell(dayData.data, activeDay, rangeEndDay);

  const onClickHandler = () => onClick(timestamp);

  const onDoubleClickHandler = () => openTodos(dayData);

  return (
    <CalendarCellContainer
      data-testid={`calendar-cell-${timestamp}`}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      $canSelect={canSelectCell}
      $isActive={isActive}
      $isRangeStart={isRangeStart}
      $isRangeMiddle={isRangeMiddle}
      $isRangeEnd={isRangeEnd}
      $isHoliday={showHoliday}
      $hidden={isHidden}
    >
      <TodosIndicator $hasTodos={hasTodos} />
      <TodosClue>Dbclick open todos</TodosClue>
      {day}
    </CalendarCellContainer>
  );
});
