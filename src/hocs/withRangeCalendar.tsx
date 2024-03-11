import { ComponentType, useCallback, useContext } from 'react';

import { ActiveRangeContext, ConfigContext } from '@/context';
import { CalendarProps } from '@/types';
import { dateRangeToString } from '@/utils';

export const withRangeCalendar =
  (WrappedCalendar: ComponentType<CalendarProps>) =>
  (props: Omit<CalendarProps, 'activeDay' | 'showClearButton' | 'onClear' | 'onClickCell'>) => {
    const { onChange: outerOnChange, format } = useContext(ConfigContext);
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
          if (outerOnChange) outerOnChange(dateRangeToString(activeStartDay, timestamp, format));
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
  };
