import { memo } from 'react';

import { ICONS } from '@/constants';

import { CalendarHeaderContainer, RewindButton, YearAndMonth } from './styled';

const { PrevIcon, NextIcon } = ICONS;

interface CalendarHeaderProps {
  month: string | number;
  year: string | number;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export const CalendarHeader = memo(
  ({ month, year, onClickNext, onClickPrev }: CalendarHeaderProps) => (
    <CalendarHeaderContainer>
      <RewindButton onClick={onClickPrev}>
        <PrevIcon />
      </RewindButton>

      <YearAndMonth>
        {month} {year}
      </YearAndMonth>

      <RewindButton onClick={onClickNext}>
        <NextIcon />
      </RewindButton>
    </CalendarHeaderContainer>
  ),
);
