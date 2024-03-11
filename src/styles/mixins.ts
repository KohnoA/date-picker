import { css } from 'styled-components';

export const flex = (justify?: string, items?: string) => css`
  display: flex;
  justify-content: ${justify ?? 'center'};
  align-items: ${items ?? 'center'};
`;

export const calendarGrid = (cols = 7, rowHeight = '32px') => css`
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-auto-rows: ${rowHeight};
`;

export const interactive = () => css`
  transition: opacity ${({ theme }) => theme.general.duration}ms;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.general.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.general.opacity.high};
  }
`;
