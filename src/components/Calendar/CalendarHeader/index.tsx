import { memo, useContext } from 'react';

import { CalendarView, ICONS, MONTH_NAMES } from '@/constants';
import { ConfigContext } from '@/context';
import {
  canRewindNextMonth,
  canRewindNextYear,
  canRewindPrevMonth,
  canRewindPrevYear,
} from '@/utils';

import {
  CalendarHeaderContainer,
  RewindButton,
  RewindButtonsContainer,
  YearAndMonth,
} from './styled';

const { PrevIcon, NextIcon, OneArrowNextIcon, OneArrowPrevIcon } = ICONS;

interface CalendarHeaderProps {
  year: number;
  month: number;
  setNextMonth: () => void;
  setPrevMonth: () => void;
  setNextYear: () => void;
  setPrevYear: () => void;
}

export const CalendarHeader = memo((props: CalendarHeaderProps) => {
  const { year, month, setNextMonth, setPrevMonth, setNextYear, setPrevYear } = props;

  const { min, max, view } = useContext(ConfigContext);
  const showRewindYearButtons = view === CalendarView.YEAR;

  return (
    <CalendarHeaderContainer $smallButtonPadding={showRewindYearButtons}>
      <RewindButtonsContainer>
        <RewindButton onClick={setPrevMonth} disabled={!canRewindPrevMonth(year, month, min)}>
          <PrevIcon />
        </RewindButton>

        {showRewindYearButtons && (
          <RewindButton onClick={setPrevYear} disabled={!canRewindPrevYear(year, month, min)}>
            <OneArrowPrevIcon />
          </RewindButton>
        )}
      </RewindButtonsContainer>

      <YearAndMonth>
        {MONTH_NAMES[month]} {year}
      </YearAndMonth>

      <RewindButtonsContainer>
        {showRewindYearButtons && (
          <RewindButton onClick={setNextYear} disabled={!canRewindNextYear(year, month, max)}>
            <OneArrowNextIcon />
          </RewindButton>
        )}

        <RewindButton onClick={setNextMonth} disabled={!canRewindNextMonth(year, month, max)}>
          <NextIcon />
        </RewindButton>
      </RewindButtonsContainer>
    </CalendarHeaderContainer>
  );
});
