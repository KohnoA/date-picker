import { css } from 'styled-components';

export const flex = (justify?: string, items?: string) => css`
  display: flex;
  justify-content: ${justify ?? 'center'};
  align-items: ${items ?? 'center'};
`;
