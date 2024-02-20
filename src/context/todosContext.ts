import { createContext } from 'react';

import { DayWithTodoControls } from '@/types';

export const TodosContext = createContext<{ openTodos: (day: DayWithTodoControls) => void }>({
  openTodos: () => {},
});
