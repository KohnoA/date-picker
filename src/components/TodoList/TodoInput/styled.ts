import styled from 'styled-components';

import { flex } from '@/styles';

export const TodoInputContainer = styled.div`
  ${flex('space-between', 'stretch')}

  gap: 10px;
  margin-bottom: 10px;
`;

export const NewTodoInput = styled.input`
  width: 100%;

  padding: 8px 10px;

  border-radius: ${({ theme }) => theme.borderRadius.high};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  outline: none;
`;

export const AddTodoButton = styled.button`
  padding: 8px 10px;

  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.high};
  transition: opacity ${({ theme }) => theme.duration};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.opacity.high};
  }
`;
