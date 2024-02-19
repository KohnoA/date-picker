import { useMemo, useState } from 'react';

import { DatePickerProvider } from '@/components/DatePickerProvider';
import { SimpleDatePicker } from '@/components/SimpleDatePicker';
import { ActiveDayContext } from '@/context';
import { DatePickerConfigType } from '@/types';

const INITIAL_ACTIVE_DAY_VALUE = null;

interface DatePickerProps extends DatePickerConfigType {
  initialDate?: Date;
}

export const DatePicker = ({ initialDate, ...config }: DatePickerProps) => {
  const [activeDay, setActiveDay] = useState<number | null>(
    initialDate ? initialDate.getTime() : INITIAL_ACTIVE_DAY_VALUE,
  );

  const activeDayContextObj = useMemo(() => ({ activeDay, setActiveDay }), [activeDay]);

  return (
    <DatePickerProvider config={config}>
      <ActiveDayContext.Provider value={activeDayContextObj}>
        <SimpleDatePicker />
      </ActiveDayContext.Provider>
    </DatePickerProvider>
  );
};
