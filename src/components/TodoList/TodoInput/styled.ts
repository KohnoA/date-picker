import styled from 'styled-components';

import { borderRadius, colors, opacity } from '@/constants';
import { flex } from '@/styles';

export const TodoInputContainer = styled.div`
  ${flex('space-between', 'stretch')}

  gap: 10px;
  margin-bottom: 10px;
`;

export const NewTodoInput = styled.input`
  width: 100%;

  padding: 8px 10px;

  border-radius: ${borderRadius.high};
  border: 1px solid ${colors.greyLight};
  outline: none;
`;

export const AddTodoButton = styled.button`
  padding: 8px 10px;

  color: ${colors.white};
  font-weight: 600;

  background-color: ${colors.blue};
  border: none;
  border-radius: ${borderRadius.high};
  transition: opacity 200ms;
  cursor: pointer;

  &:hover {
    opacity: ${opacity.low};
  }

  &:active {
    opacity: ${opacity.high};
  }
`;
