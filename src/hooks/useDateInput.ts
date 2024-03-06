import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import { ActiveDayContext, ConfigContext } from '@/context';
import {
  checkDateValidation,
  isValidSimpleDateValue,
  stringToDate,
  timestampToDateFormat,
} from '@/utils';

const INITIAL_VALUE = '';
const INITIAL_ERROR_VALUE = null;
const INITIAL_PREV_ACTIVE_DAY = null;

export function useDateInput() {
  const prevActiveDayRef = useRef<number | null>(INITIAL_PREV_ACTIVE_DAY);
  const { activeDay, setActiveDay, resetActiveDay } = useContext(ActiveDayContext);
  const { min, max, format, onChange: outerOnChange } = useContext(ConfigContext);
  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const [dateValue, setDateValue] = useState(
    activeDay ? timestampToDateFormat(activeDay) : INITIAL_VALUE,
  );

  const onClear = () => {
    setDateValue(INITIAL_VALUE);
    resetActiveDay();
    setError(INITIAL_ERROR_VALUE);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!isValidSimpleDateValue(value)) return;
    const { canSetValue, errorMessage } = checkDateValidation(value, min, max, format);

    setDateValue(value);
    setError(errorMessage);

    if (canSetValue) {
      const activeDayTimestamp = stringToDate(value, format).getTime();

      setActiveDay(activeDayTimestamp);
      prevActiveDayRef.current = activeDayTimestamp;

      if (outerOnChange) outerOnChange(timestampToDateFormat(activeDayTimestamp, format));
    }

    if (!value.length) {
      resetActiveDay();
      prevActiveDayRef.current = INITIAL_PREV_ACTIVE_DAY;
    }
  };

  useEffect(() => {
    if (prevActiveDayRef.current === activeDay) return;

    if (activeDay) setDateValue(timestampToDateFormat(activeDay, format));

    setError(INITIAL_ERROR_VALUE);
    prevActiveDayRef.current = activeDay;
  }, [activeDay]);

  return { dateValue, error, onChange, onClear };
}
