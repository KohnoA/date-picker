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
          if (!activeStartDay) {
            setActiveStartDay(timestamp);
            return;
          }

          if (!!activeStartDay && !!activeEndDay) {
            setActiveStartDay(timestamp);
            setActiveEndDay(null);
            return;
          }

          if (timestamp < activeStartDay) {
            setActiveStartDay(timestamp);
          } else if (timestamp > activeStartDay) {
            setActiveEndDay(timestamp);
          }
        },
        [activeStartDay, activeEndDay],
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
