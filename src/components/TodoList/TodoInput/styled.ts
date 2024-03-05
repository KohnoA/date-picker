import styled from 'styled-components';

import { flex, interactive } from '@/styles';

export const TodoInputContainer = styled.div`
  ${flex('space-between', 'stretch')}

  gap: 10px;
  margin-bottom: 10px;
`;

export const NewTodoInput = styled.input`
  width: 100%;

  padding: 8px 10px;

  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  border: 1px solid ${({ theme }) => theme.todos.border};
  background-color: ${({ theme }) => theme.todos.background};
  outline: none;
`;

export const AddTodoButton = styled.button`
  padding: 8px 10px;

  color: ${({ theme }) => theme.todos.addButton.text};
  font-weight: ${({ theme }) => theme.general.fontWeight.md};

  background-color: ${({ theme }) => theme.todos.addButton.background};
  border: none;
  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;

  ${interactive()}
`;
