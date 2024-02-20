import { memo, useContext, useMemo } from 'react';

import { CalendarView, ICONS, MONTH_NAMES } from '@/constants';
import { ConfigContext } from '@/context';
import { checkDisableStatus } from '@/utils';

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
  week: number;
  setNext: () => void;
  setPrev: () => void;
  setNextYear: () => void;
  setPrevYear: () => void;
}

export const CalendarHeader = memo((props: CalendarHeaderProps) => {
  const { year, month, week, setNext, setPrev, setNextYear, setPrevYear } = props;

  const { min, max, view, weekStart } = useContext(ConfigContext);
  const showRewindYearButtons = view === CalendarView.YEAR;
  const isWeekView = view === CalendarView.WEEK;

  const { disableNextButton, disableNextYearButton, disablePrevButton, disablePrevYearButton } =
    useMemo(
      () => checkDisableStatus(isWeekView, year, month, week, weekStart, max, min),
      [year, month, week, weekStart, min, max],
    );

  return (
    <CalendarHeaderContainer $smallButtonPadding={showRewindYearButtons}>
      <RewindButtonsContainer>
        <RewindButton
          data-testid="rewind-week-month-button"
          onClick={setPrev}
          disabled={disablePrevButton}
        >
          <PrevIcon />
        </RewindButton>

        {showRewindYearButtons && (
          <RewindButton
            data-testid="rewind-year-button"
            onClick={setPrevYear}
            disabled={disablePrevYearButton}
          >
            <OneArrowPrevIcon />
          </RewindButton>
        )}
      </RewindButtonsContainer>

      <YearAndMonth data-testid="week-month-year" $showWeek={isWeekView}>
        {isWeekView && `${week} week of `}
        {MONTH_NAMES[month]} {year}
      </YearAndMonth>

      <RewindButtonsContainer>
        {showRewindYearButtons && (
          <RewindButton
            data-testid="rewind-year-button"
            onClick={setNextYear}
            disabled={disableNextYearButton}
          >
            <OneArrowNextIcon />
          </RewindButton>
        )}

        <RewindButton
          data-testid="rewind-week-month-button"
          onClick={setNext}
          disabled={disableNextButton}
        >
          <NextIcon />
        </RewindButton>
      </RewindButtonsContainer>
    </CalendarHeaderContainer>
  );
});
