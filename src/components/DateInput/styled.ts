import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex } from '@/styles';

const { CalendarIcon, ClearIcon } = ICONS;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.general.margin.sm};

  margin-bottom: ${({ theme }) => theme.general.margin.sm};
  box-sizing: border-box;

  color: ${({ theme }) => theme.input.text};
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.input.label};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $isInvalid?: boolean }>`
  width: 100%;
  padding: 12px 40px;
  box-sizing: border-box;

  font: inherit;

  border-radius: ${({ theme }) => theme.general.borderRadius.high};
  border: 1px solid;
  border-color: ${({ theme, $isInvalid }) => ($isInvalid ? theme.input.error : theme.input.border)};
  outline: none;
  transition: border ${({ theme }) => theme.general.duration};
  background-color: ${({ theme }) => theme.input.background};

  &::placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
`;

export const Button = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  ${flex()}

  padding: 6px 7px;

  border: none;
  border-radius: ${({ theme }) => theme.general.borderRadius.low};
  background-color: transparent;
  transition: opacity ${({ theme }) => theme.general.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.general.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.general.opacity.high};
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
  margin: 0;

  text-align: center;
  color: ${({ theme }) => theme.input.error};
  font-size: ${({ theme }) => theme.general.fontSizes.sm};
`;

export const CalendarIconStyled = styled(CalendarIcon)`
  ${({ theme }) => `& path { fill: ${theme.input.icons}; }`}
`;

export const ClearIconStyled = styled(ClearIcon)`
  ${({ theme }) => `& path { fill: ${theme.input.icons}; }`}
`;
