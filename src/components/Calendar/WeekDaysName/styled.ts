import styled from 'styled-components';

import { fontSizes } from '@/constants';
import { calendarGrid, flex } from '@/styles';

export const DaysNameList = styled.ul`
  ${calendarGrid()}
`;

export const DayNameItem = styled.li`
  ${flex()}

  font-weight: 700;
  font-size: ${fontSizes.md};
`;
