import styled from 'styled-components';

import { colors, opacity } from '@/constants';
import { flex } from '@/styles';

export const TodoItemContainer = styled.li`
  ${flex('flex-start')}

  gap: 10px;

  width: 100%;

  padding-bottom: 10px;
  padding-top: 0;
  margin-bottom: 10px;

  border-bottom: 1px solid ${colors.greyLight};

  &:first-child {
    padding-top: 10px;

    border-top: 1px solid ${colors.greyLight};
  }

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;

    border-bottom: none;
  }
`;

export const TodoItemDescription = styled.span<{ $completed: boolean }>`
  flex-grow: 1;

  font-weight: 600;
  word-break: break-all;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;

export const TodoItemWrapper = styled.div`
  ${flex()}
  display: flex;
  gap: 5px;
`;

export const TodoItemCheckbox = styled.input`
  cursor: pointer;
`;

export const TodoItemRemoveButton = styled.button`
  ${flex()}

  background-color: transparent;
  border: none;
  transition: opacity 200ms;
  cursor: pointer;

  &:hover {
    opacity: ${opacity.low};
  }

  &:active {
    opacity: ${opacity.high};
  }
`;
