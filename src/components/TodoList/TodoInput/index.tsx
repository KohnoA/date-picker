import { ChangeEvent, memo, useState } from 'react';

import { INITIAL_VALUE } from './constants';
import { AddTodoButton, NewTodoInput, TodoInputContainer } from './styled';
import { TodoInputProps } from './types';

export const TodoInput = memo(({ onAdd }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState(INITIAL_VALUE);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddNewTodo = () => {
    if (newTodo.length === 0) return;

    onAdd(newTodo);
    setNewTodo(INITIAL_VALUE);
  };

  return (
    <TodoInputContainer>
      <NewTodoInput
        data-testid="todo-input"
        type="text"
        value={newTodo}
        onChange={handleInput}
        placeholder="Add your todo"
        autoFocus
      />
      <AddTodoButton data-testid="todo-list-add-button" type="button" onClick={handleAddNewTodo}>
        Add
      </AddTodoButton>
    </TodoInputContainer>
  );
});
