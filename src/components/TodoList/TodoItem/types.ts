import { ReactNode } from 'react';

export interface TodoItemProps {
  id: number;
  completed: boolean;
  children: ReactNode;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export interface TodoItemDescriptionProps {
  $completed: boolean;
}
