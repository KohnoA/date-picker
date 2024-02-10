import styled from 'styled-components';

import { borderRadius, colors, fontSizes, margin, opacity } from '@/constants';
import { flex } from '@/styles';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${margin.sm};

  max-width: 250px;
  margin-bottom: ${margin.lg};
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

  border-radius: ${borderRadius.high};
  border: 1px solid;
  border-color: ${({ $isInvalid }) => ($isInvalid ? colors.red : colors.greyLight)};
  outline: none;
  transition: border 300ms;
  background-color: ${colors.white};

  &::placeholder {
    color: ${colors.greyNormal};
  }
`;

export const Button = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  ${flex()}

  padding: 6px 7px;

  border: none;
  border-radius: ${borderRadius.low};
  background-color: transparent;
  transition: opacity 300ms;
  cursor: pointer;

  &:hover {
    opacity: ${opacity.low};
  }

  &:active {
    opacity: ${opacity.high};
  }
`;

export const CalendarButton = styled(Button)`
  left: 6px;
`;

export const ClearButton = styled(Button)`
  right: 6px;
`;

export const Error = styled.p`
  position: absolute;

  left: 0;
  bottom: -20px;

  width: 100%;

  text-align: center;
  color: ${colors.red};
  font-size: ${fontSizes.sm};
`;
