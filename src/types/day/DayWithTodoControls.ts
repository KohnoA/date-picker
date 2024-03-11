import { TodoType } from '../todos';

import { DayType } from './DayType';

export interface DayWithTodoControls {
  data: DayType;
  loadTodos: () => void;
  removeTodos: () => void;
  saveTodos: (todos: TodoType[]) => void;
  updateTodos: (todos: TodoType[]) => void;
}
