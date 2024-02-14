import { useCallback, useState } from 'react';

import { ICONS } from '@/constants';

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

const testData = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn Redux', completed: true },
  { id: 3, title: 'Learn Vue', completed: false },
];

export const TodoList = () => {
  const [todos, setTodos] = useState<typeof testData>(testData);

  const handleAddNewTodo = useCallback((value: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), title: value, completed: false }]);
  }, []);

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    );
  };

  return (
    <TodoListBackdrop>
      <TodoListContent>
        <TodoListCloseButton>
          <CrossIcon />
        </TodoListCloseButton>

        <TodoListDayDescription>Su 10.10.2020</TodoListDayDescription>

        <TodoInput onAdd={handleAddNewTodo} />

        <TodoListOwn>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onRemove={handleRemoveTodo}
              onToggle={handleToggleTodo}
            >
              {index + 1}. {todo.title}
            </TodoItem>
          ))}
        </TodoListOwn>
      </TodoListContent>
    </TodoListBackdrop>
  );
};
