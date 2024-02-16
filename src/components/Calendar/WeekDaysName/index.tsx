import { memo, useContext } from 'react';

import { CalendarWeekStart, WEEK_DAYS_NAME } from '@/constants';
import { ConfigContext } from '@/context';

import { DayNameItem, DaysNameList } from './styled';

export const WeekDaysName = memo(() => {
  const { weekStart } = useContext(ConfigContext);
  const weekDaysnames =
    weekStart === CalendarWeekStart.MONDAY
      ? [...WEEK_DAYS_NAME.slice(1), ...WEEK_DAYS_NAME.slice(0, 1)]
      : WEEK_DAYS_NAME;

  return (
    <DaysNameList>
      {weekDaysnames.map((dayName) => (
        <DayNameItem key={dayName}>{dayName}</DayNameItem>
      ))}
    </DaysNameList>
  );
});
