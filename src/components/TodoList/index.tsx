import { MouseEvent } from 'react';

import { ICONS } from '@/constants';
import { useTodos } from '@/hooks';
import { type DayWithTodoControls } from '@/types';
import { timestampToDateFormat } from '@/utils';

import {
  TodoListBackdrop,
  TodoListCloseButton,
  TodoListContent,
  TodoListDayDescription,
  TodoListOwn,
} from './styled';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

const { CrossIcon } = ICONS;

interface TodoListProps {
  day: DayWithTodoControls;
  onClose: () => void;
}

export const TodoList = ({ day, onClose }: TodoListProps) => {
  const { weekday, timestamp, todos: initialTodos } = day.data;
  const date = timestampToDateFormat(timestamp);

  const { todos, add, remove, toggle } = useTodos(initialTodos);

  const handleContentClick = (event: MouseEvent) => event.stopPropagation();

  const handleCloseTodoList = () => {
    day.update(todos);
    onClose();
  };

  return (
    <TodoListBackdrop onClick={handleCloseTodoList}>
      <TodoListContent onClick={handleContentClick}>
        <TodoListCloseButton onClick={handleCloseTodoList}>
          <CrossIcon />
        </TodoListCloseButton>

        <TodoListDayDescription>
          {weekday} {date}
        </TodoListDayDescription>

        <TodoInput onAdd={add} />

        <TodoListOwn>
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} {...todo} onRemove={remove} onToggle={toggle}>
              {index + 1}. {todo.title}
            </TodoItem>
          ))}
        </TodoListOwn>
      </TodoListContent>
    </TodoListBackdrop>
  );
};
