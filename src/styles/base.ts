import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.datePickerMaxWidth};

  font-family: 'Open-Sans', sans-serif;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black};

  box-sizing: border-box;
`;
