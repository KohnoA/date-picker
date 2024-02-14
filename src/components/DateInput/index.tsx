import { ChangeEvent, useId, useState } from 'react';

import { ICONS } from '@/constants';
import { dateStringHasError, isValidDateInputValue } from '@/utils';

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
const INITIAL_VALUE = '';
const INITIAL_ERROR_STATUS = false;

interface DateInputProps {
  label?: string;
  onToggleCalendar: () => void;
}

export const DateInput = ({ label = DEFAULT_LABEL, onToggleCalendar }: DateInputProps) => {
  const [value, setValue] = useState<string>(INITIAL_VALUE);
  const [hasError, setHasError] = useState<boolean>(INITIAL_ERROR_STATUS);
  const dateInputId = useId();

  const showClearButton = !!value.length;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (isValidDateInputValue(newValue)) {
      setValue(newValue);
      setHasError(dateStringHasError(newValue));
    }
  };
  const clearHandler = () => {
    setValue(INITIAL_VALUE);
    setHasError(false);
  };

  return (
    <Container>
      <Label htmlFor={dateInputId}>{label}</Label>
      <InputWrapper>
        <Input
          id={dateInputId}
          type="text"
          placeholder="Choose Date"
          value={value}
          onChange={onChangeHandler}
          $isInvalid={hasError}
        />

        <CalendarButton onClick={onToggleCalendar}>
          <CalendarIcon />
        </CalendarButton>

        {showClearButton && (
          <ClearButton onClick={clearHandler}>
            <ClearIcon />
          </ClearButton>
        )}

        {hasError && <Error>Invalid date, required MM/DD/YYYY</Error>}
      </InputWrapper>
    </Container>
  );
};
