import { useCallback, useState } from 'react';

import { TodoType } from '@/types';

export function useTodoList(initialTodos?: TodoType[]) {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos ?? []);

  const add = useCallback((value: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), title: value, completed: false }]);
  }, []);

  const remove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    );
  }, []);

  return { todos, add, remove, toggle };
}
