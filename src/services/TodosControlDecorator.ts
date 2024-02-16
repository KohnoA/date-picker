import { DayType, DayWithTodoControls, TodoType } from '@/types';

export class TodosControlDecorator implements DayWithTodoControls {
  private key: string;
  public data: DayType;

  constructor(data: DayType) {
    this.data = data;
    this.key = String(this.data.timestamp);
  }

  public loadTodos() {
    const todosInCache = localStorage.getItem(this.key);

    if (todosInCache) {
      this.data.todos = JSON.parse(todosInCache);
    }
  }

  public removeTodos() {
    this.data.todos = [];
    localStorage.removeItem(this.key);
  }

  public saveTodos(todos: TodoType[]) {
    this.data.todos = todos;
    localStorage.setItem(this.key, JSON.stringify(todos));
  }

  public updateTodos(todos: TodoType[]) {
    if (!todos.length) {
      this.removeTodos();
    } else {
      this.saveTodos(todos);
    }
  }
}
