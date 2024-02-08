import { useId } from 'react';

import { ICONS } from '@/constants';

import { CalendarButton, ClearButton, Container, Input, InputWrapper, Label } from './styled';

const { CalendarIcon, ClearIcon } = ICONS;

const DEFAULT_LABEL = 'Date';

interface DateInputProps {
  label?: string;
}

export const DateInput = ({ label = DEFAULT_LABEL }: DateInputProps) => {
  const dateInputId = useId();

  return (
    <Container>
      <Label htmlFor={dateInputId}>{label}</Label>
      <InputWrapper>
        <Input id={dateInputId} type="text" placeholder="Choose Date" />
        <CalendarButton>
          <CalendarIcon />
        </CalendarButton>
        <ClearButton>
          <ClearIcon />
        </ClearButton>
      </InputWrapper>
    </Container>
  );
};
