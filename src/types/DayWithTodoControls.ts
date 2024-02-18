import { DayType } from './DayType';
import { TodoType } from './TodoType';

export interface DayWithTodoControls {
  data: DayType;
  loadTodos: () => void;
  removeTodos: () => void;
  saveTodos: (todos: TodoType[]) => void;
  updateTodos: (todos: TodoType[]) => void;
}
