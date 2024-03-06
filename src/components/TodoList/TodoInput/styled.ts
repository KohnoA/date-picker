import styled from 'styled-components';

import { flex, interactive } from '@/styles';

const INPUT_PADDING = '8px 10px';

export const TodoInputContainer = styled.div`
  ${flex('space-between', 'stretch')}

  gap: 10px;
  margin-bottom: 10px;
`;

export const NewTodoInput = styled.input`
  width: 100%;

  padding: ${INPUT_PADDING};

  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;
  border: 1px solid ${({ theme }) => theme.todos.border};
  background-color: ${({ theme }) => theme.todos.background};
  outline: none;
`;

export const AddTodoButton = styled.button`
  padding: ${INPUT_PADDING};

  color: ${({ theme }) => theme.todos.addButton.text};
  font-weight: ${({ theme }) => theme.general.fontWeight.md};

  background-color: ${({ theme }) => theme.todos.addButton.background};
  border: none;
  border-radius: ${({ theme }) => theme.general.borderRadius.high}px;

  ${interactive()}
`;
