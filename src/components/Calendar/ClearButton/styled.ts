import styled from 'styled-components';

import { borderRadius, colors, fontSizes } from '@/constants';

export const ClearButtonContainer = styled.div`
  position: absolute;
  left: -1px;
  top: 100%;

  width: 100%;

  border: 1px solid ${colors.greyLight};
  border-bottom-left-radius: ${borderRadius.high};
  border-bottom-right-radius: ${borderRadius.high};
  overflow: hidden;
  box-sizing: content-box;
`;

export const ClearButtonOwnButton = styled.button`
  width: 100%;
  padding: 10px 0;

  font-weight: 600;
  font-size: ${fontSizes.sm};

  border: none;
  outline: none;
  background-color: ${colors.white};
  transition: background 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${colors.greyNormalAlt};
  }

  &:active {
    background-color: ${colors.greyLight};
  }
`;
