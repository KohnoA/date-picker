import styled from 'styled-components';

import { borderRadius, colors } from '@/constants';

export const CalendarContainer = styled.section`
  padding: 10px;

  border: 1px solid ${colors.greyLight};
  border-radius: ${borderRadius.high};
`;
