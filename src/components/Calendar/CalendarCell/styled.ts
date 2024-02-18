import styled from 'styled-components';

import { flex } from '@/styles';

export const CalendarCellContainer = styled.li<{
  $canSelect: boolean;
  $isActive: boolean;
  $isHoliday: boolean;
  $hidden: boolean;
}>`
  ${({ $hidden }) =>
    $hidden
      ? `
        display: none;
  `
      : flex()};

  position: relative;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;

  border-radius: ${({ theme }) => theme.borderRadius.high};
  transition: all ${({ theme }) => theme.duration};
  user-select: none;
  cursor: pointer;

  color: ${({ $isHoliday, theme }) => ($isHoliday ? theme.colors.red : theme.colors.black)};

  ${({ $canSelect, theme }) =>
    $canSelect
      ? `
        pointer-events: all;
  `
      : `
        opacity: ${theme.opacity.high};
        pointer-events: none;
  `}

  ${({ $isActive, $isHoliday, theme }) =>
    $isActive
      ? `
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
  `
      : `
        &:hover {
          color: ${$isHoliday ? theme.colors.red : theme.colors.black};
          background-color: ${theme.colors.greyNormalAlt};
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
