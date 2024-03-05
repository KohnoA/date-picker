import styled from 'styled-components';

export const ClearButtonContainer = styled.div`
  position: absolute;
  left: -1px;
  top: 100%;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.calendar.border};
  border-bottom-left-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  border-bottom-right-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  overflow: hidden;
  box-sizing: content-box;
`;

export const ClearButtonOwnButton = styled.button`
  width: 100%;
  padding: 10px 0;

  font-weight: ${({ theme }) => theme.general.fontWeight.md};
  font-size: ${({ theme }) => theme.general.fontSizes.sm}px;
  color: ${({ theme }) => theme.calendar.text};

  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.calendar.background};
  transition: background ${({ theme }) => theme.general.duration}ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.calendar.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.calendar.border};
  }
`;
