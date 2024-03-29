export interface CalendarHeaderProps {
  year: number;
  month: number;
  week: number;
  setNextWeek: () => void;
  setPrevWeek: () => void;
  setNextMonth: () => void;
  setPrevMonth: () => void;
  setNextYear: () => void;
  setPrevYear: () => void;
}

export interface CalendarHeaderContainerProps {
  $smallButtonPadding: boolean;
}

export interface YearAndMonthProps {
  $showWeek: boolean;
}
