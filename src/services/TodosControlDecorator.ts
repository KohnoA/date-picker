import { DayType, TodoType } from '@/types';

export class TodosControlDecorator {
  private key: string;
  public data: DayType;

  constructor(data: DayType) {
    this.data = data;
    this.key = String(this.data.timestamp);
  }

  public load() {
    const todosInCache = localStorage.getItem(this.key);

    if (todosInCache) {
      this.data.todos = JSON.parse(todosInCache);
    }
  }

  public removeAll() {
    this.data.todos = [];
    localStorage.removeItem(this.key);
  }

  public save(todos: TodoType[]) {
    this.data.todos = todos;
    localStorage.setItem(this.key, JSON.stringify(todos));
  }

  public update(todos: TodoType[]) {
    if (!todos.length) {
      this.removeAll();
    } else {
      this.save(todos);
    }
  }
}
