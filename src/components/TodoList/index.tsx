import { MouseEvent } from 'react';

import {
  CrossIconStyled,
  TodoListBackdrop,
  TodoListCloseButton,
  TodoListContent,
  TodoListDayDescription,
  TodoListOwn,
} from './styled';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { TodoListProps } from './types';

export const TodoList = (props: TodoListProps) => {
  const { weekday, date, todos, onClose, onAdd, onRemove, onToggle } = props;

  const handleContentClick = (event: MouseEvent) => event.stopPropagation();

  return (
    <TodoListBackdrop data-testid="todo-list-backdrop" onClick={onClose}>
      <TodoListContent data-testid="todo-list" onClick={handleContentClick}>
        <TodoListCloseButton data-testid="todo-list-close-button" onClick={onClose}>
          <CrossIconStyled />
        </TodoListCloseButton>

        <TodoListDayDescription>
          {weekday} {date}
        </TodoListDayDescription>

        <TodoInput onAdd={onAdd} />

        <TodoListOwn>
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle}>
              {index + 1}. {todo.title}
            </TodoItem>
          ))}
        </TodoListOwn>
      </TodoListContent>
    </TodoListBackdrop>
  );
};
