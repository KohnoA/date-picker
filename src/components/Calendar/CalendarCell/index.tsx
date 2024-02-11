import { DayType } from '@/types';

import { CalendarCellContainer } from './styled';

type CalendarCallProps = DayType;

export const CalendarCell = (props: CalendarCallProps) => {
  const { day, isCurrentMonth, isActive } = props;

  return (
    <CalendarCellContainer $isCurrentMonth={isCurrentMonth} $isActive={isActive}>
      {day}
    </CalendarCellContainer>
  );
};
