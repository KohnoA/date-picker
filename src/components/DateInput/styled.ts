import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 250px; // TODO: Remove later
`;

export const Label = styled.label`
  color: #333333;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 39px;

  font-size: 15px;

  border-radius: 8px;
  border: 1px solid #dddddd;
  outline: none;
  transition: border 300ms;

  &::placeholder {
    color: #bbbbbb;
  }

  box-sizing: border-box; // TODO: Remove later
`;

export const Button = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 7px;

  border: none;
  border-radius: 4px;
  background-color: transparent;
  transition: opacity 300ms;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const CalendarButton = styled(Button)`
  left: 6px;
`;

export const ClearButton = styled(Button)`
  right: 6px;
`;
