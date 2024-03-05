import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex, interactive } from '@/styles';

import { CalendarHeaderContainerProps, YearAndMonthProps } from './types';

const { PrevIcon, NextIcon, OneArrowNextIcon, OneArrowPrevIcon } = ICONS;

export const CalendarHeaderContainer = styled.div<CalendarHeaderContainerProps>`
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

  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  border: none;
  background-color: transparent;

  ${interactive()}

  &:disabled {
    opacity: ${({ theme }) => theme.general.opacity.high};
    pointer-events: none;
  }
`;

export const YearAndMonth = styled.p<YearAndMonthProps>`
  flex-grow: 1;
  margin: 0;

  text-align: center;
  font-weight: ${({ theme }) => theme.general.fontWeight.bl};
  font-size: ${({ $showWeek, theme }) =>
    $showWeek ? theme.general.fontSizes.sm : theme.general.fontSizes.md}px;
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
