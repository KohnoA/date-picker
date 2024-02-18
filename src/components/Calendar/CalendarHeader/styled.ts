import styled from 'styled-components';

import { borderRadius, fontSizes, opacity } from '@/constants';
import { flex } from '@/styles';

export const CalendarHeaderContainer = styled.div<{ $smallButtonPadding: boolean }>`
  ${flex('space-between')}

  & button {
    padding: ${({ $smallButtonPadding }) => ($smallButtonPadding ? '8px 3px' : '8px 6px')};
  }
`;

export const RewindButtonsContainer = styled.div`
  ${flex()}
`;

export const RewindButton = styled.button`
  ${flex()}

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

  &:disabled {
    opacity: ${opacity.high};
    pointer-events: none;
  }
`;

export const YearAndMonth = styled.p`
  flex-grow: 1;

  text-align: center;
  font-weight: 700;
  font-size: ${fontSizes.md};
`;
