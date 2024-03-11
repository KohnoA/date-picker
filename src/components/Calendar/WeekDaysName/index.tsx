import { memo, useContext, useMemo } from 'react';

import { ConfigContext } from '@/context';
import { convertDayNames } from '@/utils';

import { DayNameItem, DaysNameList } from './styled';

export const WeekDaysName = memo(() => {
  const { weekStart, showWeekends } = useContext(ConfigContext);

  const daysName = useMemo(
    () => convertDayNames(weekStart, showWeekends),
    [weekStart, showWeekends],
  );

  return (
    <DaysNameList data-testid="calendar-day-name" $showWeekends={!!showWeekends}>
      {daysName.map((dayName) => (
        <DayNameItem key={dayName}>{dayName}</DayNameItem>
      ))}
    </DaysNameList>
  );
});
