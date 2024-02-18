import { LOCAL_STORAGE_KEY_TODOS } from '@/constants';
import { DayType, DayWithTodoControls, TodoType } from '@/types';

interface TodoItemStorageType {
  dayKey: string;
  todos: TodoType[];
}

export class TodosControlDecorator implements DayWithTodoControls {
  private static localStorageKey = LOCAL_STORAGE_KEY_TODOS;
  private dayKey: string;
  public data: DayType;

  constructor(data: DayType) {
    this.data = data;
    this.dayKey = String(this.data.timestamp);
  }

  public static getAllTodos() {
    const todosInCache: TodoItemStorageType[] = JSON.parse(
      localStorage.getItem(TodosControlDecorator.localStorageKey) ?? '[]',
    );

    return todosInCache;
  }

  public loadTodos() {
    const todosInCache = TodosControlDecorator.getAllTodos();
    const todosForDay = todosInCache.find((day) => day.dayKey === this.dayKey);

    if (todosForDay) {
      this.data.todos = todosForDay.todos;
    }
  }

  public removeTodos() {
    const todosInCache = TodosControlDecorator.getAllTodos();
    const filteredTodos = todosInCache.filter((day) => day.dayKey !== this.dayKey);

    this.data.todos = [];
    localStorage.setItem(TodosControlDecorator.localStorageKey, JSON.stringify(filteredTodos));
  }

  public saveTodos(todos: TodoType[]) {
    const todosInCache = TodosControlDecorator.getAllTodos();
    const filteredTodos = todosInCache.filter((day) => day.dayKey !== this.dayKey);

    this.data.todos = todos;
    localStorage.setItem(
      TodosControlDecorator.localStorageKey,
      JSON.stringify([
        ...filteredTodos,
        {
          dayKey: this.dayKey,
          todos,
        },
      ]),
    );
  }

  public updateTodos(todos: TodoType[]) {
    if (!todos.length) {
      this.removeTodos();
    } else {
      this.saveTodos(todos);
    }
  }
}
