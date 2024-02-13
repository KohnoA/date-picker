import { memo, ReactNode } from 'react';

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
  id: number;
  completed: boolean;
  children: ReactNode;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TodoItem = memo(({ id, completed, children, onToggle, onRemove }: TodoItemProps) => {
  const handleRemove = () => onRemove(id);

  const handleToggle = () => onToggle(id);

  return (
    <TodoItemContainer>
      <TodoItemDescription $completed={completed}>{children}</TodoItemDescription>

      <TodoItemWrapper>
        <TodoItemCheckbox type="checkbox" onChange={handleToggle} checked={completed} />

        <TodoItemRemoveButton aria-label="Remove todo item" onClick={handleRemove}>
          <CrossIcon width={18} height={18} />
        </TodoItemRemoveButton>
      </TodoItemWrapper>
    </TodoItemContainer>
  );
});
