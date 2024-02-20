import styled from 'styled-components';

import { calendarGrid } from '@/styles';

export const CalendarContainer = styled.section<{
  $showClearButton: boolean;
  $showCalendar: boolean;
}>`
  position: absolute;

  top: 100%;

  width: 100%;
  padding: 10px;

  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 200ms;

  ${({ $showClearButton, theme }) =>
    $showClearButton
      ? `
    border-bottom-right-radius: none;
    border-bottom-left-radius: none;
    border-top-right-radius: ${theme.borderRadius.high};
    border-top-left-radius: ${theme.borderRadius.high};
  `
      : `
    border-radius: ${theme.borderRadius.high};
  `}

  ${({ $showCalendar }) =>
    $showCalendar
      ? `
      opacity: 1;
      transform: translateY(10px) scale(1);
      pointer-events: all;
      visibility: visible;
  `
      : `
      opacity: 0;
      transform: translateY(10px) scale(0.95);
      pointer-events: none;
      visibility: hidden;
  `}
`;

export const DaysList = styled.ul<{ $showWeekends: boolean }>`
  ${({ $showWeekends }) => ($showWeekends ? calendarGrid(7) : calendarGrid(5, '44px'))}

  list-style: none;
`;
