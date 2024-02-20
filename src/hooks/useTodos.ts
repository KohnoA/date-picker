import { useState } from 'react';

import { DayWithTodoControls, TodoType } from '@/types';

const INITIAL_DAY = null;
const INITIAL_TODOS: TodoType[] = [];

interface TodosStateType {
  day: DayWithTodoControls | null;
  todos: TodoType[];
}

const initialTodosState = {
  day: INITIAL_DAY,
  todos: INITIAL_TODOS,
};

export function useTodos() {
  const [todosState, setTodosState] = useState<TodosStateType>(initialTodosState);

  const openTodos = (day: DayWithTodoControls) => {
    setTodosState({ day, todos: day.data.todos });
  };

  const closeTodos = () => {
    const { day, todos } = todosState;

    day!.updateTodos(todos);
    setTodosState(initialTodosState);
  };

  const add = (value: string) => {
    setTodosState(({ day, todos }) => ({
      day,
      todos: [...todos, { id: Date.now(), title: value, completed: false }],
    }));
  };

  const remove = (id: number) => {
    setTodosState(({ day, todos }) => ({
      day,
      todos: todos.filter((todo) => todo.id !== id),
    }));
  };

  const toggle = (id: number) => {
    setTodosState(({ day, todos }) => ({
      day,
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    }));
  };

  return {
    day: todosState.day,
    todos: todosState.todos,
    openTodos,
    closeTodos,
    add,
    remove,
    toggle,
  };
}
