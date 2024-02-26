import { ComponentType, memo, useCallback, useContext } from 'react';

import { ActiveDayContext } from '@/context';
import { CalendarProps } from '@/types';

export const withSimpleCalendar = (WrappedCalendar: ComponentType<CalendarProps>) =>
  memo(
    (props: Omit<CalendarProps, 'activeDay' | 'showClearButton' | 'onClear' | 'onClickCell'>) => {
      const { activeDay, setActiveDay, resetActiveDay } = useContext(ActiveDayContext);

      const showClearButton = !!activeDay;

      const clearCaledar = useCallback(() => resetActiveDay(), []);

      const onClickHandler = useCallback((timestamp: number) => setActiveDay(timestamp), []);

      return (
        <WrappedCalendar
          {...props}
          activeDay={activeDay}
          showClearButton={showClearButton}
          onClear={clearCaledar}
          onClickCell={onClickHandler}
        />
      );
    },
  );
