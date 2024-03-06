import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex, interactive } from '@/styles';

import { TodoItemDescriptionProps } from './types';

const { CrossIcon } = ICONS;

const TODOS_MARGIN = 10;

export const TodoItemContainer = styled.li`
  ${flex('flex-start')}

  gap: ${TODOS_MARGIN}px;

  width: 100%;

  padding-bottom: ${TODOS_MARGIN}px;
  padding-top: 0;
  margin-bottom: ${TODOS_MARGIN}px;

  border-bottom: 1px solid ${({ theme }) => theme.todos.border};

  &:first-child {
    padding-top: ${TODOS_MARGIN}px;

    border-top: 1px solid ${({ theme }) => theme.todos.border};
  }

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;

    border-bottom: none;
  }
`;

export const TodoItemDescription = styled.span<TodoItemDescriptionProps>`
  flex-grow: 1;

  font-weight: ${({ theme }) => theme.general.fontWeight.md};
  word-break: break-all;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;

export const TodoItemWrapper = styled.div`
  ${flex()}

  gap: 5px;
`;

export const TodoItemCheckbox = styled.input`
  cursor: pointer;
`;

export const TodoItemRemoveButton = styled.button`
  ${flex()}

  background-color: transparent;
  border: none;

  ${interactive()}
`;

export const CrossIconStyled = styled(CrossIcon)`
  ${({ theme }) => `& path { fill: ${theme.todos.icons}; }`}
`;
