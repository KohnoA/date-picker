import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex } from '@/styles';

import { InputProps } from './types';

const { CalendarIcon, ClearIcon } = ICONS;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.general.margin.sm}px;

  margin-bottom: ${({ theme }) => theme.general.margin.sm}px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.input.text};
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.general.fontWeight.md};
  color: ${({ theme }) => theme.input.label};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding-top: 12px;
  padding-right: ${({ $showClearButton }) => ($showClearButton ? '40px' : '15px')};
  padding-bottom: 12px;
  padding-left: 40px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.input.text};
  font: inherit;

  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  border: 1px solid;
  border-color: ${({ theme, $isInvalid }) => ($isInvalid ? theme.input.error : theme.input.border)};
  outline: none;
  transition: border ${({ theme }) => theme.general.duration}ms;
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
  border-radius: ${({ theme }) => theme.general.borderRadius.low}px;
  background-color: transparent;
  transition: opacity ${({ theme }) => theme.general.duration}ms;
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
  font-size: ${({ theme }) => theme.general.fontSizes.sm}px;
`;

export const CalendarIconStyled = styled(CalendarIcon)`
  ${({ theme }) => `& path { fill: ${theme.input.icons}; }`}
`;

export const ClearIconStyled = styled(ClearIcon)`
  ${({ theme }) => `& path { fill: ${theme.input.icons}; }`}
`;
