type GeneralColorsKeys = 'background' | 'border' | 'icons' | 'text';

type InputColorsKeys = GeneralColorsKeys | 'placeholder';
type CalendarColorsKeys = GeneralColorsKeys | 'indicator' | 'holiday' | 'currentDay';
type TodoListColorsKeys = GeneralColorsKeys | 'placeholder' | 'button';

export interface ColorOptionsType {
  input: Record<InputColorsKeys, string>;
  calendar: Record<CalendarColorsKeys, string>;
  todoList: Record<TodoListColorsKeys, string>;
}
