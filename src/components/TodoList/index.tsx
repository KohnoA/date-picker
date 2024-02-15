import { MouseEvent } from 'react';

import { ICONS } from '@/constants';
import { useTodos } from '@/hooks';
import { DayType } from '@/types';
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
  dayData: DayType;
  onClose: () => void;
}

export const TodoList = ({ dayData, onClose }: TodoListProps) => {
  const { weekday, timestamp } = dayData;
  const date = timestampToDateFormat(timestamp);

  const { todos, add, remove, toggle } = useTodos(dayData?.todos);

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
