import { ComponentType, useCallback, useContext } from 'react';

import { ActiveDayContext, ConfigContext } from '@/context';
import { CalendarProps } from '@/types';
import { timestampToDateFormat } from '@/utils';

export const withSimpleCalendar =
  (WrappedCalendar: ComponentType<CalendarProps>) =>
  (props: Omit<CalendarProps, 'activeDay' | 'showClearButton' | 'onClear' | 'onClickCell'>) => {
    const { activeDay, setActiveDay, resetActiveDay } = useContext(ActiveDayContext);
    const { onChange: outerOnChange, format } = useContext(ConfigContext);

    const showClearButton = !!activeDay;

    const clearCaledar = useCallback(() => resetActiveDay(), []);

    const onClickHandler = useCallback((timestamp: number) => {
      setActiveDay(timestamp);
      if (outerOnChange) outerOnChange(timestampToDateFormat(timestamp, format));
    }, []);

    return (
      <WrappedCalendar
        {...props}
        activeDay={activeDay}
        showClearButton={showClearButton}
        onClear={clearCaledar}
        onClickCell={onClickHandler}
      />
    );
  };
