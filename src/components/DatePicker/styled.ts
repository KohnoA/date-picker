import styled from 'styled-components';

import { colors, fontSizes } from '@/constants';

export const Container = styled.div`
  position: relative;

  max-width: 250px;
`;

export const Error = styled.p`
  /* position: absolute;

  left: 0;
  bottom: -20px; */

  width: 100%;

  text-align: center;
  color: ${colors.red};
  font-size: ${fontSizes.sm};
`;
