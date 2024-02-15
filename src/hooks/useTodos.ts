import { useEffect, useState } from 'react';

import { TodosDecorator } from '@/services';
import { TodoType } from '@/types';

export function useTodos(dayTodoData?: TodosDecorator | null) {
  const [todos, setTodos] = useState<TodoType[]>(dayTodoData?.list ?? []);

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

  useEffect(() => () => dayTodoData?.update(todos), [todos]);

  return { todos, add, remove, toggle };
}
