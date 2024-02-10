import styled from 'styled-components';

import { borderRadius, opacity } from '@/constants';
import { flex } from '@/styles';

export const CalendarHeaderContainer = styled.div`
  ${flex('space-between')}
`;

export const RewindButton = styled.button`
  ${flex()}

  padding: 5px;

  border-radius: ${borderRadius.high};
  border: none;
  background-color: transparent;
  transition: opacity 300ms;
  cursor: pointer;

  &:hover {
    opacity: ${opacity.low};
  }

  &:active {
    opacity: ${opacity.high};
  }
`;

export const YearAndMonth = styled.p`
  font-weight: 700;
`;
