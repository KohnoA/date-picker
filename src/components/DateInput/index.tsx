import { ChangeEvent, memo, useId } from 'react';

import { ICONS } from '@/constants';

import { CalendarButton, ClearButton, Container, Input, InputWrapper, Label } from './styled';

const { CalendarIcon, ClearIcon } = ICONS;

const DEFAULT_LABEL = 'Date';
const DEFAULT_PLACEHOLDER = 'Choose Date';

interface DateInputProps {
  label?: string;
  value: string;
  hasError?: boolean;
  placeholder?: string;
  onToggleCalendar: () => void;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const DateInput = memo((props: DateInputProps) => {
  const { value, label, placeholder, hasError, onToggleCalendar, onChange, onClear } = props;
  const showClearButton = !!value.length;

  const dateInputId = useId();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <Label htmlFor={dateInputId}>{label ?? DEFAULT_LABEL}</Label>
      <InputWrapper>
        <Input
          id={dateInputId}
          type="text"
          placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
          value={value}
          onChange={handleInput}
          $isInvalid={hasError}
        />

        <CalendarButton onClick={onToggleCalendar}>
          <CalendarIcon />
        </CalendarButton>

        {showClearButton && (
          <ClearButton onClick={onClear}>
            <ClearIcon />
          </ClearButton>
        )}
      </InputWrapper>
    </Container>
  );
});
