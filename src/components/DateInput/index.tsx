import { ChangeEvent, memo, useContext, useId, useRef, useState } from 'react';

import { ICONS } from '@/constants';
import { ConfigContext } from '@/context';
import { dateStringHasError, isValidDateInputValue, timestampToDateFormat } from '@/utils';

import { errorInvalidDate, errorLessMinDate, errorMoreMaxDate } from './config';
import {
  CalendarButton,
  ClearButton,
  Container,
  Error,
  Input,
  InputWrapper,
  Label,
} from './styled';

const { CalendarIcon, ClearIcon } = ICONS;

const DEFAULT_LABEL = 'Date';
const DEFAULT_PLACEHOLDER = 'Choose Date';
const INITIAL_DATE_VALUE = '';
const INITIAL_ERROR_VALUE = null;
const FULL_DATE_VALUE_LENGTH = 10;

interface DateInputProps {
  label?: string;
  placeholder?: string;
  activeDay: number | null;
  toggleCalendar: () => void;
  setActiveDay: (timestamp: number) => void;
  resetActiveDay: () => void;
}

export const DateInput = memo((props: DateInputProps) => {
  const { label, placeholder, activeDay, toggleCalendar, setActiveDay, resetActiveDay } = props;

  const prevActiveDayRef = useRef<number | null>(null);
  const [dateValue, setDateValue] = useState<string>(INITIAL_DATE_VALUE);

  if (prevActiveDayRef.current !== activeDay) {
    if (activeDay) setDateValue(timestampToDateFormat(activeDay));
    prevActiveDayRef.current = activeDay;
  }

  const [error, setError] = useState<string | null>(INITIAL_ERROR_VALUE);
  const { min, max } = useContext(ConfigContext);
  const dateInputId = useId();

  const showClearButton = !!dateValue.length;

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!isValidDateInputValue(value)) return;
    const isIncorrectDate = dateStringHasError(value);
    const isFullDateEntered = value.length === FULL_DATE_VALUE_LENGTH;
    const isLessMinDate = min ? new Date(value).getTime() < min.getTime() : false;
    const isMoreMaxDate = max ? new Date(value).getTime() > max.getTime() : false;

    setDateValue(value);
    setError(() => {
      if (isLessMinDate) return errorLessMinDate;
      if (isMoreMaxDate) return errorMoreMaxDate;
      if (isIncorrectDate) return errorInvalidDate;

      return INITIAL_ERROR_VALUE;
    });

    if (isFullDateEntered && !isIncorrectDate && !isLessMinDate && !isMoreMaxDate) {
      setActiveDay(new Date(value).getTime());
    } else {
      resetActiveDay();
    }
  };

  const handleClearInput = () => {
    setDateValue(INITIAL_DATE_VALUE);
    resetActiveDay();
  };

  return (
    <Container>
      <Label htmlFor={dateInputId}>{label ?? DEFAULT_LABEL}</Label>

      <InputWrapper>
        <Input
          id={dateInputId}
          type="text"
          placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
          value={dateValue}
          onChange={handleInputValue}
          $isInvalid={!!error}
        />

        <CalendarButton onClick={toggleCalendar}>
          <CalendarIcon />
        </CalendarButton>

        {showClearButton && (
          <ClearButton onClick={handleClearInput}>
            <ClearIcon />
          </ClearButton>
        )}
      </InputWrapper>

      {error && <Error>{error}</Error>}
    </Container>
  );
});
