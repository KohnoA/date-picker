import styled from 'styled-components';

import { borderRadius, colors, fontSizes } from '@/constants';
import { flex } from '@/styles';

export const CalendarCellContainer = styled.li<{ $isCurrentMonth: boolean; $isActive: boolean }>`
  ${flex()};

  font-size: ${fontSizes.sm};
  font-weight: 600;
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? colors.black : colors.greyDark)};

  border-radius: ${borderRadius.high};
  transition: all 200ms;
  user-select: none;
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive
      ? `
        color: ${colors.white};
        background-color: ${colors.blue};
      `
      : `
        &:hover {
          color: ${colors.black};
          background-color: ${colors.greyNormalAlt};
      }`}
`;
