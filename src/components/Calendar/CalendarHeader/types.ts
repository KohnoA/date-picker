export interface CalendarHeaderProps {
  year: number;
  month: number;
  week: number;
  setNext: () => void;
  setPrev: () => void;
  setNextYear: () => void;
  setPrevYear: () => void;
}

export interface CalendarHeaderContainerProps {
  $smallButtonPadding: boolean;
}

export interface YearAndMonthProps {
  $showWeek: boolean;
}
