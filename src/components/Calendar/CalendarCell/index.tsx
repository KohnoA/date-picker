import { memo, useContext } from 'react';

import { ConfigContext } from '@/context';
import { DayType } from '@/types';

import { CalendarCellContainer, TodosIndicator } from './styled';

interface CalendarCallProps extends DayType {
  isActive: boolean;
  onClick: (timestamp: number) => void;
  onDoubleClick: (timestamp: number) => void;
}

export const CalendarCell = memo((props: CalendarCallProps) => {
  const { day, timestamp, isCurrentMonth, isActive, isHoliday, todos, onClick, onDoubleClick } =
    props;

  const { showHolidays } = useContext(ConfigContext);

  const hasTodos = !!todos.length;

  const onClickHandler = () => onClick(timestamp);

  const onDoubleClickHanlder = () => onDoubleClick(timestamp);

  return (
    <CalendarCellContainer
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHanlder}
      $isCurrentMonth={isCurrentMonth}
      $isActive={isActive}
      $isHoliday={!!(isHoliday && showHolidays)}
    >
      <TodosIndicator $hasTodos={hasTodos} />
      {day}
    </CalendarCellContainer>
  );
});
