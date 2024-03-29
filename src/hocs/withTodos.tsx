import { ComponentProps, ComponentType, useMemo } from 'react';

import { TodoList } from '@/components/TodoList';
import { TodosContext } from '@/context';
import { useTodos } from '@/hooks';
import { timestampToDateFormat } from '@/utils';

export const withTodos =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: ComponentProps<typeof WrappedComponent>) => {
    const { day, todos, openTodos, closeTodos, addTodo, removeTodo, toggleTodoStatus } = useTodos();
    const showTodos = !!day;

    const todosContextObj = useMemo(() => ({ openTodos }), [day]);

    return (
      <TodosContext.Provider value={todosContextObj}>
        <WrappedComponent {...(props as T)!} />

        {showTodos && (
          <TodoList
            weekday={day.data.weekday}
            date={timestampToDateFormat(day.data.timestamp)}
            todos={todos}
            onClose={closeTodos}
            onAdd={addTodo}
            onRemove={removeTodo}
            onToggle={toggleTodoStatus}
          />
        )}
      </TodosContext.Provider>
    );
  };
