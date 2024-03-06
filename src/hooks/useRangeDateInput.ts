import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import { RANGE_DATE_SEPARATOR } from '@/constants';
import { ActiveRangeContext, ConfigContext } from '@/context';
import {
  checkRangeDateValidation,
  dateRangeToString,
  isValidRangeDateValue,
  stringToDate,
} from '@/utils';

const INITIAL_RANGE_VALUE = '';
const INITIAL_ERROR_VALUE = null;
const INITIAL_PREV_ACTIVE_RANGE = null;

export function useRangeDateInput() {
  const prevRangeValueRef = useRef<string | null>(INITIAL_PREV_ACTIVE_RANGE);
  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const { min, max, format, onChange: outerOnChange } = useContext(ConfigContext);
  const { activeStartDay, activeEndDay, setActiveStartDay, setActiveEndDay, resetActiveRange } =
    useContext(ActiveRangeContext);
  const [rangeValue, setRangeValue] = useState(
    activeStartDay || activeEndDay
      ? dateRangeToString(activeStartDay, activeEndDay)
      : INITIAL_RANGE_VALUE,
  );

  const onClear = () => {
    setRangeValue(INITIAL_RANGE_VALUE);
    setError(INITIAL_ERROR_VALUE);
    resetActiveRange();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!isValidRangeDateValue(value)) return;
    const { canSetValue, errorMessage } = checkRangeDateValidation(value, min, max, format);

    setRangeValue(value);
    setError(errorMessage);

    if (canSetValue) {
      const [start, end] = value.split(RANGE_DATE_SEPARATOR);
      const startDayTimestamp = stringToDate(start, format).getTime();
      const endDayTimestamp = stringToDate(end, format).getTime();

      setActiveStartDay(startDayTimestamp);
      setActiveEndDay(endDayTimestamp);
      prevRangeValueRef.current = value;

      if (outerOnChange)
        outerOnChange(dateRangeToString(startDayTimestamp, endDayTimestamp, format));
    }

    if (!value.length) {
      resetActiveRange();
      prevRangeValueRef.current = INITIAL_PREV_ACTIVE_RANGE;
    }
  };

  useEffect(() => {
    const activeRangeString = dateRangeToString(activeStartDay, activeEndDay, format);

    if (prevRangeValueRef.current === activeRangeString) return;

    if (activeStartDay && activeEndDay) setRangeValue(activeRangeString);

    setError(INITIAL_ERROR_VALUE);
    prevRangeValueRef.current = activeRangeString;
  }, [activeStartDay, activeEndDay]);

  return { rangeValue, error, onChange, onClear };
}
