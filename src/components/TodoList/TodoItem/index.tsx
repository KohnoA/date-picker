import { ReactNode } from 'react';

import { ICONS } from '@/constants';

import {
  TodoItemCheckbox,
  TodoItemContainer,
  TodoItemDescription,
  TodoItemRemoveButton,
  TodoItemWrapper,
} from './styled';

const { CrossIcon } = ICONS;

interface TodoItemProps {
  children: ReactNode;
}

export const TodoItem = ({ children }: TodoItemProps) => (
  <TodoItemContainer>
    <TodoItemDescription>{children}</TodoItemDescription>

    <TodoItemWrapper>
      <TodoItemCheckbox type="checkbox" />

      <TodoItemRemoveButton aria-label="Remove todo item">
        <CrossIcon width={18} height={18} />
      </TodoItemRemoveButton>
    </TodoItemWrapper>
  </TodoItemContainer>
);
