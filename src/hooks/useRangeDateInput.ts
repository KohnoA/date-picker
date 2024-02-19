import { ChangeEvent, useContext, useRef, useState } from 'react';

import { RANGE_DATE_SEPARATOR } from '@/constants';
import { ActiveRangeContext, ConfigContext } from '@/context';
import { checkRangeDateValidation, convertDateRangeToString, isValidRangeDateValue } from '@/utils';

const INITIAL_RANGE_VALUE = '';
const INITIAL_ERROR_VALUE = null;

export function useRangeDateInput() {
  const { activeStartDay, activeEndDay, setActiveStartDay, setActiveEndDay, resetActiveRange } =
    useContext(ActiveRangeContext);
  const activeRangeString = convertDateRangeToString(activeStartDay, activeEndDay);

  const { min, max } = useContext(ConfigContext);
  const [rangeValue, setRangeValue] = useState<string>(INITIAL_RANGE_VALUE);
  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const prevRangeValueRef = useRef<string | null>(activeRangeString);

  if (prevRangeValueRef.current !== activeRangeString) {
    if (activeStartDay && activeEndDay) setRangeValue(activeRangeString);
    setError(INITIAL_ERROR_VALUE);

    prevRangeValueRef.current = activeRangeString;
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!isValidRangeDateValue(value)) return;
    const { canSetValue, errorMessage } = checkRangeDateValidation(value, min, max);

    setRangeValue(value);
    setError(errorMessage);

    if (canSetValue) {
      const [start, end] = value.split(RANGE_DATE_SEPARATOR);

      setActiveStartDay(new Date(start).getTime());
      setActiveEndDay(new Date(end).getTime());
    }
  };

  const onClear = () => {
    setRangeValue(INITIAL_RANGE_VALUE);
    setError(INITIAL_ERROR_VALUE);
    resetActiveRange();
  };

  return { rangeValue, error, onChange, onClear };
}
