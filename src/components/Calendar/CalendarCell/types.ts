import { DayWithTodoControls } from '@/types';

export interface CalendarCellProps {
  dayData: DayWithTodoControls;
  activeDay: number | null;
  rangeEndDay?: number | null;
  onClick: (timestamp: number) => void;
}

export interface TodosIndicatorProps {
  $hasTodos: boolean;
}

export interface CalendarCellContainerProps {
  $canSelect: boolean;
  $isActive: boolean;
  $isHoliday: boolean;
  $hidden: boolean;
  $isRangeStart: boolean;
  $isRangeMiddle: boolean;
  $isRangeEnd: boolean;
}
