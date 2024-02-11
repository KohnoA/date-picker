import { GlobalStyles } from '@/styles';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

import { Container } from './styled';

export const DatePicker = () => (
  <Container>
    <GlobalStyles />
    <DateInput />
    <Calendar />
  </Container>
);
