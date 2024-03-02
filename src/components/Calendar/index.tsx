import { useContext } from 'react';

import { ConfigContext } from '@/context';
import { withRangeCalendar, withSimpleCalendar, withTodos } from '@/hocs';
import { useCalendar } from '@/hooks';
import { CalendarProps } from '@/types';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { ClearButton } from './ClearButton';
import { CalendarContainer, DaysList } from './styled';
import { WeekDaysName } from './WeekDaysName';

const Calendar = (props: CalendarProps) => {
  const { showCalendar, activeDay, rangeEndDay, showClearButton, onClear, onClickCell } = props;

  const { weekStart, showWeekends, min, max, view } = useContext(ConfigContext);
  const { days, ...calendarControls } = useCalendar({
    activeDay,
    weekStart,
    min,
    max,
    view,
  });

  return (
    <CalendarContainer
      data-testid="calendar"
      $showCalendar={showCalendar}
      $showClearButton={showClearButton}
    >
      <CalendarHeader {...calendarControls} />
      <WeekDaysName />

      <DaysList data-testid="calendar-cell-list" $showWeekends={!!showWeekends}>
        {days.map((day) => (
          <CalendarCell
            key={day.data.timestamp}
            dayData={day}
            activeDay={activeDay}
            rangeEndDay={rangeEndDay}
            onClick={onClickCell}
          />
        ))}
      </DaysList>

      {showClearButton && <ClearButton onClear={onClear} />}
    </CalendarContainer>
  );
};

export const RangeCalendar = withRangeCalendar(withTodos(Calendar));
export const SimpleCalendar = withSimpleCalendar(withTodos(Calendar));
