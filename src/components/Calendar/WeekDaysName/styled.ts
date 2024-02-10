import styled from 'styled-components';

import { calendarGrid, flex } from '@/styles';

export const DaysNameList = styled.ul`
  ${calendarGrid()}
`;

export const DayNameItem = styled.li`
  ${flex()}

  font-weight: 700;
`;
