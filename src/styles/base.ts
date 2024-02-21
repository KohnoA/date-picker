import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Open-Sans', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DatePickerContainer = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.datePickerMaxWidth};
`;
