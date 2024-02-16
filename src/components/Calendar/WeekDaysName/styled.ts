import styled from 'styled-components';

import { fontSizes } from '@/constants';
import { calendarGrid, flex } from '@/styles';

export const DaysNameList = styled.ul<{ $showWeekends: boolean }>`
  ${({ $showWeekends }) => ($showWeekends ? calendarGrid(7) : calendarGrid(5, '44px'))}
`;

export const DayNameItem = styled.li`
  ${flex()}

  font-weight: 700;
  font-size: ${fontSizes.md};
`;
