import styled from 'styled-components';

import { calendarGrid } from '@/styles';

import { CalendarContainerProps, DaysListProps } from './types';

export const CalendarContainer = styled.section<CalendarContainerProps>`
  position: absolute;
  z-index: 2;

  top: 100%;

  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.calendar.border};
  background-color: ${({ theme }) => theme.calendar.background};
  transition: all ${({ theme }) => theme.general.duration}ms;

  ${({ $showClearButton, theme }) =>
    $showClearButton
      ? `
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${theme.general.borderRadius.high}px;
    border-top-left-radius: ${theme.general.borderRadius.high}px;
  `
      : `
    border-radius: ${theme.general.borderRadius.high}px;
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

export const DaysList = styled.ul<DaysListProps>`
  ${({ $showWeekends }) => ($showWeekends ? calendarGrid(7) : calendarGrid(5, '44px'))}

  padding: 0;
  margin: 0;

  list-style: none;
`;
