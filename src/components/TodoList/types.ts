import { TodoType } from '@/types';

export interface TodoListProps {
  weekday: string;
  date: string;
  todos: TodoType[];
  onClose: () => void;
  onAdd: (value: string) => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
