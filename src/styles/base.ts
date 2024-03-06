import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.general.maxWidth}px;
  min-width: 250px;

  font-family: ${({ theme }) => theme.general.fontFamily};
  font-weight: ${({ theme }) => theme.general.fontWeight.lg};
  font-size: ${({ theme }) => theme.general.fontSizes.md}px;
  color: ${({ theme }) => theme.calendar.text};

  box-sizing: border-box;
`;
