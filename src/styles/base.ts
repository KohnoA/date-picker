import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.general.maxWidth};

  font-family: ${({ theme }) => theme.general.fontFamily};
  font-weight: 400;
  font-size: ${({ theme }) => theme.general.fontSizes.md};
  color: ${({ theme }) => theme.calendar.text};

  box-sizing: border-box;
`;
