import styled from 'styled-components';

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

  border-radius: ${({ theme }) => theme.borderRadius.high};
  border: none;
  background-color: transparent;
  transition: opacity ${({ theme }) => theme.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.opacity.high};
  }

  &:disabled {
    opacity: ${({ theme }) => theme.opacity.high};
    pointer-events: none;
  }
`;

export const YearAndMonth = styled.p<{ $showWeek: boolean }>`
  flex-grow: 1;
  margin: 0;

  text-align: center;
  font-weight: 700;
  font-size: ${({ $showWeek, theme }) => ($showWeek ? theme.fontSizes.sm : theme.fontSizes.md)};
`;
