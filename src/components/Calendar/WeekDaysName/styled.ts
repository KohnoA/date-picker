import styled from 'styled-components';

import { calendarGrid, flex } from '@/styles';

import { DaysNameListProps } from './types';

export const DaysNameList = styled.ul<DaysNameListProps>`
  ${({ $showWeekends }) => ($showWeekends ? calendarGrid(7) : calendarGrid(5, '44px'))}

  padding: 0;
  margin: 0;
`;

export const DayNameItem = styled.li`
  ${flex()}

  font-weight: ${({ theme }) => theme.general.fontWeight.bl};
  font-size: ${({ theme }) => theme.general.fontSizes.md}px;
`;
