import { css } from 'styled-components';

export const flex = (justify?: string, items?: string) => css`
  display: flex;
  justify-content: ${justify ?? 'center'};
  align-items: ${items ?? 'center'};
`;

export const calendarGrid = (cols = 7) => css`
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-auto-rows: 32px;
`;
