import { ComponentType, useMemo, useState } from 'react';

import { ActiveDayContext } from '@/context';

const INITIAL_ACTIVE_DAY_VALUE = null;

export const withSimpleLogic = (WrappedComponent: ComponentType, initialDate?: Date) => () => {
  const [activeDay, setActiveDay] = useState<number | null>(
    initialDate?.getTime() ?? INITIAL_ACTIVE_DAY_VALUE,
  );

  const resetActiveDay = () => setActiveDay(INITIAL_ACTIVE_DAY_VALUE);

  const activeDayContextObj = useMemo(
    () => ({ activeDay, setActiveDay, resetActiveDay }),
    [activeDay],
  );

  return (
    <ActiveDayContext.Provider value={activeDayContextObj}>
      <WrappedComponent />
    </ActiveDayContext.Provider>
  );
};
