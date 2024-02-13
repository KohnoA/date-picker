import { ChangeEvent, useCallback, useState } from 'react';

import { ICONS } from '@/constants';
import { GlobalStyles } from '@/styles';

import {
  TodoListAddTodoButton,
  TodoListBackdrop,
  TodoListCloseButton,
  TodoListContent,
  TodoListDayDescription,
  TodoListInput,
  TodoListOwn,
  TodoListWrapper,
} from './styles';
import { TodoItem } from './TodoItem';

const { CrossIcon } = ICONS;

const testData = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn Redux', completed: true },
  { id: 3, title: 'Learn Vue', completed: false },
];

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<typeof testData>(testData);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddNewTodo = () => {
    setTodos((prev) => [...prev, { id: Date.now(), title: newTodo, completed: false }]);
  };

  const handleRemoveTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleToggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    );
  }, []);

  return (
    <>
      <GlobalStyles /> {/* <= TODO: Remove later */}
      <TodoListBackdrop>
        <TodoListContent>
          <TodoListCloseButton>
            <CrossIcon />
          </TodoListCloseButton>

          <TodoListDayDescription>Su 10.10.2020</TodoListDayDescription>

          <TodoListWrapper>
            <TodoListInput
              type="text"
              value={newTodo}
              onChange={handleInput}
              placeholder="Add your todo"
              autoFocus
            />
            <TodoListAddTodoButton onClick={handleAddNewTodo}>Add</TodoListAddTodoButton>
          </TodoListWrapper>

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
    </>
  );
};
