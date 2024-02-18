import { useState } from 'react';

import { TodoType } from '@/types';

const DEFAULT_VALUE: TodoType[] = [];

export function useTodos(initialTodos?: TodoType[]) {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos ?? DEFAULT_VALUE);

  const add = (value: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), title: value, completed: false }]);
  };

  const remove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    );
  };

  return { todos, add, remove, toggle };
}
