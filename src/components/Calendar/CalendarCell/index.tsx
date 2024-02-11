import { DayType } from '@/types';

import { CalendarCellContainer } from './styled';

interface CalendarCallProps extends DayType {
  onClick: (timestamp: number) => void;
}

export const CalendarCell = (props: CalendarCallProps) => {
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
};
