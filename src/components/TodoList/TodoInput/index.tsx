import { ChangeEvent, memo, useState } from 'react';

import { AddTodoButton, NewTodoInput, TodoInputContainer } from './styled';

const INITIAL_VALUE = '';

interface TodoInputProps {
  onAdd: (value: string) => void;
}

export const TodoInput = memo(({ onAdd }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState<string>(INITIAL_VALUE);

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
        type="text"
        value={newTodo}
        onChange={handleInput}
        placeholder="Add your todo"
        autoFocus
      />
      <AddTodoButton onClick={handleAddNewTodo}>Add</AddTodoButton>
    </TodoInputContainer>
  );
});
