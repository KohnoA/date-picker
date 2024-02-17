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
  const {
    day,
    timestamp,
    isCurrentMonth,
    isActive,
    isHoliday,
    isWeekend,
    todos,
    onClick,
    onDoubleClick,
  } = props;

  const { showHolidays, showWeekends, min, max } = useContext(ConfigContext);

  const hasTodos = !!todos.length;
  const isLessMinDate = min ? timestamp < min.getTime() : false;
  const isMoreMaxDate = max ? timestamp > max.getTime() : false;
  const canSelectCell = isCurrentMonth && !isLessMinDate && !isMoreMaxDate;

  const onClickHandler = () => onClick(timestamp);

  const onDoubleClickHanlder = () => onDoubleClick(timestamp);

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
