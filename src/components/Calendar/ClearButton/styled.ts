import styled from 'styled-components';

export const ClearButtonContainer = styled.div`
  position: absolute;
  left: -1px;
  top: 100%;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.high};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.high};
  overflow: hidden;
  box-sizing: content-box;
`;

export const ClearButtonOwnButton = styled.button`
  width: 100%;
  padding: 10px 0;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};

  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background ${({ theme }) => theme.duration};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyNormalAlt};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }
`;
