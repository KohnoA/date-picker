import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.datePickerMaxWidth};
`;
