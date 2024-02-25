import styled from 'styled-components';

import { flex } from '@/styles';

export const TodosClue = styled.p`
  position: absolute;
  z-index: 999;
  top: -35px;
  left: 100%;

  width: min-content;
  padding: 5px;

  white-space: nowrap;
  color: ${({ theme }) => theme.calendar.text};
  font-size: 12px;

  transition: ${({ theme }) => theme.general.duration};
  background-color: ${({ theme }) => theme.calendar.hover};
  border-radius: ${({ theme }) => theme.general.borderRadius.high};

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
`;

export const CalendarCellContainer = styled.li<{
  $canSelect: boolean;
  $isActive: boolean;
  $isHoliday: boolean;
  $hidden: boolean;
  $isRangeStart: boolean;
  $isRangeMiddle: boolean;
  $isRangeEnd: boolean;
}>`
  position: relative;

  font-size: ${({ theme }) => theme.general.fontSizes.sm};
  font-weight: 600;

  border-radius: ${({ theme }) => theme.general.borderRadius.high};
  transition: all ${({ theme }) => theme.general.duration};
  user-select: none;
  cursor: pointer;

  color: ${({ theme }) => theme.calendar.text};

  ${({ $hidden }) =>
    $hidden
      ? `
        display: none;
  `
      : flex()};

  ${({ $canSelect, theme }) =>
    $canSelect
      ? `
        pointer-events: all;
  `
      : `
        opacity: ${theme.general.opacity.high};
        pointer-events: none;
  `}

  ${({ $isRangeMiddle, theme }) =>
    $isRangeMiddle &&
    `
    color: ${theme.calendar.cell.active};
    background-color: ${theme.calendar.cell.range};
    border-radius: 0;
  `}

  ${({ $isHoliday, theme }) => $isHoliday && `color: ${theme.calendar.cell.holiday};`}

  ${({ $isRangeEnd, theme }) =>
    $isRangeEnd &&
    `
    color: ${theme.calendar.background};
    background-color: ${theme.calendar.cell.active};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({ $isActive, theme }) =>
    $isActive &&
    `
        color: ${theme.calendar.background};
        background-color: ${theme.calendar.cell.active};
      `}

  ${({ $isRangeStart, theme }) =>
    $isRangeStart &&
    `
    opacity: ${theme.general.opacity.low};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({ $isActive, $isRangeStart, $isRangeMiddle, $isRangeEnd, $isHoliday, theme }) =>
    !$isActive &&
    !$isRangeStart &&
    !$isRangeMiddle &&
    !$isRangeEnd &&
    `
    &:hover {
      color: ${$isHoliday ? theme.calendar.cell.holiday : theme.calendar.text};
      background-color: ${theme.calendar.hover};
    }
  `}

  &:hover {
    ${TodosClue} {
      opacity: 0.9;
      visibility: visible;
    }
  }
`;

export const TodosIndicator = styled.span<{ $hasTodos: boolean }>`
  display: ${({ $hasTodos }) => ($hasTodos ? 'block' : 'none')};

  position: absolute;
  top: 4px;
  right: 4px;

  width: 5px;
  height: 5px;

  background-color: ${({ theme }) => theme.calendar.cell.indicator};
  border-radius: 100%;
`;
