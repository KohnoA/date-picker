import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex } from '@/styles';

const { PrevIcon, NextIcon, OneArrowNextIcon, OneArrowPrevIcon } = ICONS;

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

  border-radius: ${({ theme }) => theme.general.borderRadius.high};
  border: none;
  background-color: transparent;
  transition: opacity ${({ theme }) => theme.general.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.general.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.general.opacity.high};
  }

  &:disabled {
    opacity: ${({ theme }) => theme.general.opacity.high};
    pointer-events: none;
  }
`;

export const YearAndMonth = styled.p<{ $showWeek: boolean }>`
  flex-grow: 1;
  margin: 0;

  text-align: center;
  font-weight: 700;
  font-size: ${({ $showWeek, theme }) =>
    $showWeek ? theme.general.fontSizes.sm : theme.general.fontSizes.md};
`;

export const PrevIconStyled = styled(PrevIcon)`
  ${({ theme }) => `& path { fill: ${theme.calendar.icons}; }`}
`;

export const NextIconStyled = styled(NextIcon)`
  ${({ theme }) => `& path { fill: ${theme.calendar.icons}; }`}
`;

export const OneArrowPrevIconStyled = styled(OneArrowPrevIcon)`
  ${({ theme }) => `& path { fill: ${theme.calendar.icons}; }`}
`;

export const OneArrowNextIconStyled = styled(OneArrowNextIcon)`
  ${({ theme }) => `& path { fill: ${theme.calendar.icons}; }`}
`;
