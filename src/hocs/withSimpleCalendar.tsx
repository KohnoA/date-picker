import { ComponentProps, memo, useCallback, useContext } from 'react';

import { type CalendarType } from '@/components/Calendar';
import { ActiveDayContext } from '@/context';

export const withSimpleCalendar = (WrappedCalendar: CalendarType) =>
  memo(
    (
      props: Omit<
        ComponentProps<typeof WrappedCalendar>,
        'activeDay' | 'showClearButton' | 'onClear' | 'onClickCell'
      >,
    ) => {
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
