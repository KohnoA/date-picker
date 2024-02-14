import styled from 'styled-components';

import { borderRadius, colors } from '@/constants';
import { calendarGrid } from '@/styles';

export const CalendarContainer = styled.section<{
  $showClearButton: boolean;
  $showCalendar: boolean;
}>`
  position: absolute;

  top: 100%;

  width: 100%;
  padding: 10px;

  border: 1px solid ${colors.greyLight};
  background-color: ${colors.white};
  transition: all 200ms;

  ${({ $showClearButton }) =>
    $showClearButton
      ? `
    border-bottom-right-radius: none;
    border-bottom-left-radius: none;
    border-top-right-radius: ${borderRadius.high};
    border-top-left-radius: ${borderRadius.high};
  `
      : `
    border-radius: ${borderRadius.high};
  `}

  ${({ $showCalendar }) =>
    $showCalendar
      ? `
      opacity: 1;
      transform: translateY(10px) scale(1);
      pointer-events: all;
  `
      : `
      opacity: 0;
      transform: translateY(10px) scale(0.95);
      pointer-events: none;
  `}
`;

export const DaysList = styled.ul`
  ${calendarGrid()}

  list-style: none;
`;
