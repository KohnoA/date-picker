import { ComponentType, useMemo, useState } from 'react';

import { ActiveRangeContext } from '@/context';

const INITIAL_ACTIVE_DAY_VALUE = null;

export const withRangeLogic =
  (WrappedComponent: ComponentType, initialStartDate?: Date, initialEndDate?: Date) => () => {
    const [activeStartDay, setActiveStartDay] = useState<number | null>(
      initialStartDate?.getTime() ?? INITIAL_ACTIVE_DAY_VALUE,
    );
    const [activeEndDay, setActiveEndDay] = useState<number | null>(
      initialEndDate?.getTime() ?? INITIAL_ACTIVE_DAY_VALUE,
    );

    const resetActiveRange = () => {
      setActiveStartDay(INITIAL_ACTIVE_DAY_VALUE);
      setActiveEndDay(INITIAL_ACTIVE_DAY_VALUE);
    };

    const ActiveRangeContextObj = useMemo(
      () => ({
        activeStartDay,
        activeEndDay,
        setActiveStartDay,
        setActiveEndDay,
        resetActiveRange,
      }),
      [activeStartDay, activeEndDay],
    );

    return (
      <ActiveRangeContext.Provider value={ActiveRangeContextObj}>
        <WrappedComponent />
      </ActiveRangeContext.Provider>
    );
  };
