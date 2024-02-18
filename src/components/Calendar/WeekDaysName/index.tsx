import { memo, useContext } from 'react';

import { CalendarWeekStart, NAMES_OF_WEEKENDS, WEEK_DAYS_NAME } from '@/constants';
import { ConfigContext } from '@/context';

import { DayNameItem, DaysNameList } from './styled';

export const WeekDaysName = memo(() => {
  const { weekStart, showWeekends } = useContext(ConfigContext);

  let weekDaysName =
    weekStart === CalendarWeekStart.MONDAY
      ? [...WEEK_DAYS_NAME.slice(1), ...WEEK_DAYS_NAME.slice(0, 1)]
      : WEEK_DAYS_NAME;

  if (!showWeekends) {
    weekDaysName = weekDaysName.filter((dayName) => !NAMES_OF_WEEKENDS.includes(dayName));
  }

  return (
    <DaysNameList $showWeekends={!!showWeekends}>
      {weekDaysName.map((dayName) => (
        <DayNameItem key={dayName}>{dayName}</DayNameItem>
      ))}
    </DaysNameList>
  );
});
