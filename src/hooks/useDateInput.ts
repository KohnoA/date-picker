import { ChangeEvent, useContext, useRef, useState } from 'react';

import { ActiveDayContext, ConfigContext } from '@/context';
import { checkDateValidation, isValidSimpleDateValue, timestampToDateFormat } from '@/utils';

const INITIAL_VALUE = '';
const INITIAL_ERROR_VALUE = null;

export function useDateInput() {
  const { activeDay, setActiveDay, resetActiveDay } = useContext(ActiveDayContext);
  const { min, max } = useContext(ConfigContext);
  const [dateValue, setDateValue] = useState<string>(INITIAL_VALUE);
  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const prevActiveDayRef = useRef<number | null>(null);

  if (prevActiveDayRef.current !== activeDay) {
    if (activeDay) {
      setDateValue(timestampToDateFormat(activeDay));
      setError(INITIAL_ERROR_VALUE);
    }

    prevActiveDayRef.current = activeDay;
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!isValidSimpleDateValue(value)) return;
    const { canSetValue, errorMessage } = checkDateValidation(value, min, max);

    setDateValue(value);
    setError(errorMessage);

    if (canSetValue) setActiveDay(new Date(value).getTime());
  };

  const onClear = () => {
    setDateValue(INITIAL_VALUE);
    resetActiveDay();
    setError(INITIAL_ERROR_VALUE);
  };

  return { dateValue, error, onChange, onClear };
}
