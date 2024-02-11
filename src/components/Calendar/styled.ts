import styled from 'styled-components';

import { borderRadius, colors } from '@/constants';
import { calendarGrid } from '@/styles';

export const CalendarContainer = styled.section`
  padding: 10px;

  border: 1px solid ${colors.greyLight};
  border-radius: ${borderRadius.high};
  background-color: ${colors.white};
`;

export const DaysList = styled.ul`
  ${calendarGrid()}

  list-style: none;
`;
