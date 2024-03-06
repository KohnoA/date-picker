import { TodoType } from '../TodoType';

import { DayType } from './DayType';

export interface DayWithTodoControls {
  data: DayType;
  loadTodos: () => void;
  removeTodos: () => void;
  saveTodos: (todos: TodoType[]) => void;
  updateTodos: (todos: TodoType[]) => void;
}
