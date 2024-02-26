import { memo, useContext, useId, useMemo } from 'react';

import { ConfigContext } from '@/context';

import { DEFAULT_LABEL } from './constants';
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
import { DateInputProps } from './types';

export const DateInput = memo((props: DateInputProps) => {
  const { value, error, onChange, onClear, toggleCalendar } = props;
  const { label, range, format } = useContext(ConfigContext);
  const dateInputId = useId();

  const showClearButton = !!value.length;
  const inputPlaceholder = useMemo(
    () => (range ? `${format} - ${format}` : format),
    [range, format],
  );

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
          placeholder={inputPlaceholder}
          value={value}
          onChange={onChange}
          $isInvalid={!!error}
          $showClearButton={showClearButton}
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
