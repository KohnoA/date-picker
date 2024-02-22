import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import { RANGE_DATE_SEPARATOR } from '@/constants';
import { ActiveRangeContext, ConfigContext } from '@/context';
import { checkRangeDateValidation, convertDateRangeToString, isValidRangeDateValue } from '@/utils';

const INITIAL_RANGE_VALUE = '';
const INITIAL_ERROR_VALUE = null;

export function useRangeDateInput() {
  const { activeStartDay, activeEndDay, setActiveStartDay, setActiveEndDay, resetActiveRange } =
    useContext(ActiveRangeContext);
  const activeRangeString = convertDateRangeToString(activeStartDay, activeEndDay);

  const {
    initialStartDate,
    initialEndDate,
    min,
    max,
    onChange: outerOnChange,
  } = useContext(ConfigContext);
  const prevRangeValueRef = useRef<string | null>(activeRangeString);
  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const [rangeValue, setRangeValue] = useState<string>(
    initialStartDate || initialEndDate
      ? convertDateRangeToString(initialStartDate?.getTime(), initialEndDate?.getTime())
      : INITIAL_RANGE_VALUE,
  );

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

  useEffect(() => {
    if (prevRangeValueRef.current === activeRangeString) return;

    if (activeStartDay && activeEndDay) {
      setRangeValue(activeRangeString);

      if (outerOnChange) outerOnChange(activeRangeString);
    }

    setError(INITIAL_ERROR_VALUE);
    prevRangeValueRef.current = activeRangeString;
  }, [activeRangeString, activeStartDay, activeEndDay]);

  return { rangeValue, error, onChange, onClear };
}
