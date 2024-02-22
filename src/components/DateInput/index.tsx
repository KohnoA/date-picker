import { ChangeEvent, memo, useContext, useId } from 'react';

import { ConfigContext } from '@/context';

import {
  CalendarButton,
  CalendarIconStyled,
  ClearButton,
  ClearIconStyled,
  Container,
  Error,
  Input,
  InputWrapper,
  Label,
} from './styled';

const DEFAULT_LABEL = 'Date';

interface DateInputProps {
  value: string;
  error?: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  toggleCalendar: () => void;
}

export const DateInput = memo((props: DateInputProps) => {
  const { value, error, onChange, onClear, toggleCalendar } = props;
  const { label } = useContext(ConfigContext);
  const dateInputId = useId();

  const showClearButton = !!value.length;

  return (
    <Container data-testid="date-input">
      <Label data-testid="date-input-label" htmlFor={dateInputId}>
        {label ?? DEFAULT_LABEL}
      </Label>

      <InputWrapper>
        <Input
          data-testid="date-input-field"
          id={dateInputId}
          type="text"
          placeholder="Choose Date"
          value={value}
          onChange={onChange}
          $isInvalid={!!error}
        />

        <CalendarButton data-testid="toggle-calendar-button" type="button" onClick={toggleCalendar}>
          <CalendarIconStyled />
        </CalendarButton>

        {showClearButton && (
          <ClearButton data-testid="clear-date-input-button" type="button" onClick={onClear}>
            <ClearIconStyled />
          </ClearButton>
        )}
      </InputWrapper>

      {error && <Error data-testid="date-input-error">{error}</Error>}
    </Container>
  );
});
