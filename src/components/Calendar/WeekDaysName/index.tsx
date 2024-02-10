import { memo } from 'react';

import { WEEK_DAYS_NAME } from '@/constants';

import { DayNameItem, DaysNameList } from './styled';

export const WeekDaysName = memo(() => (
  <DaysNameList>
    {WEEK_DAYS_NAME.map((dayName) => (
      <DayNameItem key={dayName}>{dayName}</DayNameItem>
    ))}
  </DaysNameList>
));
