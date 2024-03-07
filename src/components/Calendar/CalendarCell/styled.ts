import styled from 'styled-components';

import { flex } from '@/styles';

import { CalendarCellContainerProps, TodosIndicatorProps } from './types';

export const TodosClue = styled.p`
  position: absolute;
  z-index: 2;
  top: -35px;
  left: 100%;

  width: min-content;
  padding: 5px 7px;

  white-space: nowrap;
  color: ${({ theme }) => theme.calendar.text};
  font-size: 12px;

  transition: ${({ theme }) => theme.general.duration}ms;
  background-color: ${({ theme }) => theme.calendar.hover};
  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
`;

export const TodosIndicator = styled.span<TodosIndicatorProps>`
  display: ${({ $hasTodos }) => ($hasTodos ? 'block' : 'none')};

  position: absolute;
  top: 4px;
  right: 4px;

  width: 5px;
  height: 5px;

  background-color: ${({ theme }) => theme.calendar.cell.indicator};
  border-radius: 100%;
`;

export const CalendarCellContainer = styled.li<CalendarCellContainerProps>`
  position: relative;

  font-size: ${({ theme }) => theme.general.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.general.fontWeight.md};

  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  transition: all ${({ theme }) => theme.general.duration}ms;
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
