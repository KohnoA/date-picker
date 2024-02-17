import { memo, useContext } from 'react';

import { ICONS, MONTH_NAMES } from '@/constants';
import { ConfigContext } from '@/context';
import { canRewindNext, canRewindPrev } from '@/utils';

import { CalendarHeaderContainer, RewindButton, YearAndMonth } from './styled';

const { PrevIcon, NextIcon } = ICONS;

interface CalendarHeaderProps {
  date: Date;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export const CalendarHeader = memo(({ date, onClickNext, onClickPrev }: CalendarHeaderProps) => {
  const { min, max } = useContext(ConfigContext);

  const year = date.getFullYear();
  const month = MONTH_NAMES[date.getMonth()];

  return (
    <CalendarHeaderContainer>
      <RewindButton onClick={onClickPrev} disabled={!canRewindPrev(date, min)}>
        <PrevIcon />
      </RewindButton>

      <YearAndMonth>
        {month} {year}
      </YearAndMonth>

      <RewindButton onClick={onClickNext} disabled={!canRewindNext(date, max)}>
        <NextIcon />
      </RewindButton>
    </CalendarHeaderContainer>
  );
});
