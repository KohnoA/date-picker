import styled from 'styled-components';

import { calendarGrid, flex } from '@/styles';

export const DaysNameList = styled.ul<{ $showWeekends: boolean }>`
  ${({ $showWeekends }) => ($showWeekends ? calendarGrid(7) : calendarGrid(5, '44px'))}

  padding: 0;
  margin: 0;
`;

export const DayNameItem = styled.li`
  ${flex()}

  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
