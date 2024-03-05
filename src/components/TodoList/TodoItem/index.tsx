import { memo } from 'react';

import {
  CrossIconStyled,
  TodoItemCheckbox,
  TodoItemContainer,
  TodoItemDescription,
  TodoItemRemoveButton,
  TodoItemWrapper,
} from './styled';
import { TodoItemProps } from './types';

export const TodoItem = memo(({ id, completed, children, onToggle, onRemove }: TodoItemProps) => {
  const handleRemove = () => onRemove(id);

  const handleToggle = () => onToggle(id);

  return (
    <TodoItemContainer data-testid="todo-item">
      <TodoItemDescription data-testid="todo-item-desc" $completed={completed}>
        {children}
      </TodoItemDescription>

      <TodoItemWrapper>
        <TodoItemCheckbox
          data-testid="todo-item-checkbox"
          type="checkbox"
          onChange={handleToggle}
          checked={completed}
        />

        <TodoItemRemoveButton
          data-testid="remove-todo-button"
          aria-label="Remove todo item"
          onClick={handleRemove}
        >
          <CrossIconStyled width={18} height={18} />
        </TodoItemRemoveButton>
      </TodoItemWrapper>
    </TodoItemContainer>
  );
});
