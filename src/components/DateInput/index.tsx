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
    <Container>
      <Label htmlFor={dateInputId}>{label ?? DEFAULT_LABEL}</Label>

      <InputWrapper>
        <Input
          id={dateInputId}
          type="text"
          placeholder="Choose Date"
          value={value}
          onChange={onChange}
          $isInvalid={!!error}
        />

        <CalendarButton onClick={toggleCalendar}>
          <CalendarIcon />
        </CalendarButton>

        {showClearButton && (
          <ClearButton onClick={onClear}>
            <ClearIcon />
          </ClearButton>
        )}
      </InputWrapper>

      {error && <Error>{error}</Error>}
    </Container>
  );
});
