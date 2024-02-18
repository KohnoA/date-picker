import styled from 'styled-components';

import { flex } from '@/styles';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.sm};

  margin-bottom: ${({ theme }) => theme.margin.sm};
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $isInvalid?: boolean }>`
  width: 100%;
  padding: 12px 40px;

  font: inherit;

  border-radius: ${({ theme }) => theme.borderRadius.high};
  border: 1px solid;
  border-color: ${({ theme, $isInvalid }) =>
    $isInvalid ? theme.colors.red : theme.colors.greyLight};
  outline: none;
  transition: border ${({ theme }) => theme.duration};
  background-color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.greyNormal};
  }
`;

export const Button = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  ${flex()}

  padding: 6px 7px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.low};
  background-color: transparent;
  transition: opacity ${({ theme }) => theme.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.opacity.high};
  }
`;

export const CalendarButton = styled(Button)`
  left: 6px;
`;

export const ClearButton = styled(Button)`
  right: 6px;
`;

export const Error = styled.p`
  width: 100%;

  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
