import { MouseEvent } from 'react';

import { ICONS } from '@/constants';
import { TodoType } from '@/types';

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
  weekday: string;
  date: string;
  todos: TodoType[];
  onClose: () => void;
  onAdd: (value: string) => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { weekday, date, todos, onClose, onAdd, onRemove, onToggle } = props;

  const handleContentClick = (event: MouseEvent) => event.stopPropagation();

  return (
    <TodoListBackdrop onClick={onClose}>
      <TodoListContent onClick={handleContentClick}>
        <TodoListCloseButton onClick={onClose}>
          <CrossIcon />
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
