import { ChangeEvent, memo, useContext, useId } from 'react';

import { ICONS } from '@/constants';
import { ConfigContext } from '@/context';

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

        <CalendarButton data-testid="toggle-calendar-button" onClick={toggleCalendar}>
          <CalendarIcon />
        </CalendarButton>

        {showClearButton && (
          <ClearButton data-testid="clear-date-input-button" onClick={onClear}>
            <ClearIcon />
          </ClearButton>
        )}
      </InputWrapper>

      {error && <Error data-testid="date-input-error">{error}</Error>}
    </Container>
  );
});
