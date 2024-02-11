import { memo } from 'react';

import { DayType } from '@/types';

import { CalendarCellContainer } from './styled';

interface CalendarCallProps extends DayType {
  isActive: boolean;
  onClick: (timestamp: number) => void;
}

export const CalendarCell = memo((props: CalendarCallProps) => {
  const { day, timestamp, isCurrentMonth, isActive, onClick } = props;

  const onClickHandler = () => onClick(timestamp);

  return (
    <CalendarCellContainer
      onClick={onClickHandler}
      $isCurrentMonth={isCurrentMonth}
      $isActive={isActive}
    >
      {day}
    </CalendarCellContainer>
  );
});
