import styled from 'styled-components';

import { borderRadius, colors } from '@/constants';
import { calendarGrid } from '@/styles';

export const CalendarContainer = styled.section<{ $showClearButton: boolean }>`
  position: relative;

  padding: 10px;

  border: 1px solid ${colors.greyLight};
  background-color: ${colors.white};

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
`;

export const DaysList = styled.ul`
  ${calendarGrid()}

  list-style: none;
`;
