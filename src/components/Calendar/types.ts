export interface CalendarProps {
  showCalendar: boolean;
  showClearButton: boolean;
  activeDay: number | null;
  rangeEndDay?: number | null;
  onClear: () => void;
  onClickCell: (timestamp: number) => void;
}

export interface CalendarContainerProps {
  $showClearButton: boolean;
  $showCalendar: boolean;
}

export interface DaysListProps {
  $showWeekends: boolean;
}
