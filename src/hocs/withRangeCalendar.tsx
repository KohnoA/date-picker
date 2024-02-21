import { ComponentType, memo, useCallback, useContext } from 'react';

import { CalendarProps } from '@/components/Calendar';
import { ActiveRangeContext } from '@/context';

export const withRangeCalendar = (WrappedCalendar: ComponentType<CalendarProps>) =>
  memo(
    (props: Omit<CalendarProps, 'activeDay' | 'showClearButton' | 'onClear' | 'onClickCell'>) => {
      const { activeStartDay, activeEndDay, setActiveStartDay, setActiveEndDay, resetActiveRange } =
        useContext(ActiveRangeContext);

      const showClearButton = !!activeStartDay || !!activeEndDay;

      const clearCaledar = useCallback(() => resetActiveRange(), []);

      const onClickCellHandler = useCallback(
        (timestamp: number) => {
          if (!!activeStartDay && timestamp > activeStartDay) setActiveEndDay(timestamp);
          else setActiveStartDay(timestamp);
        },
        [activeStartDay],
      );

      return (
        <WrappedCalendar
          {...props}
          activeDay={activeStartDay}
          rangeEndDay={activeEndDay}
          showClearButton={showClearButton}
          onClear={clearCaledar}
          onClickCell={onClickCellHandler}
        />
      );
    },
  );
