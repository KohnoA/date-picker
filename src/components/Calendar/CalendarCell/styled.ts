import styled from 'styled-components';

import { flex } from '@/styles';

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

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;

  border-radius: ${({ theme }) => theme.borderRadius.high};
  transition: all ${({ theme }) => theme.duration};
  user-select: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.black};

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
        opacity: ${theme.opacity.high};
        pointer-events: none;
  `}

  ${({ $isRangeMiddle, theme }) =>
    $isRangeMiddle &&
    `
    color: ${theme.colors.blue};
    background-color: ${theme.colors.blueTransparent};
    border-radius: 0;
  `}

  ${({ $isHoliday, theme }) => $isHoliday && `color: ${theme.colors.red};`}

  ${({ $isRangeEnd, theme }) =>
    $isRangeEnd &&
    `
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({ $isActive, theme }) =>
    $isActive &&
    `
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
      `}

  ${({ $isRangeStart, theme }) =>
    $isRangeStart &&
    `
    opacity: ${theme.opacity.low};
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
      color: ${$isHoliday ? theme.colors.red : theme.colors.black};
      background-color: ${theme.colors.greyNormalAlt};
    }
  `}
`;

export const TodosIndicator = styled.span<{ $hasTodos: boolean }>`
  display: ${({ $hasTodos }) => ($hasTodos ? 'block' : 'none')};

  position: absolute;
  top: 4px;
  right: 4px;

  width: 5px;
  height: 5px;

  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 100%;
`;
