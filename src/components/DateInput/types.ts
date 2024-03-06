import { ChangeEvent } from 'react';

export interface DateInputProps {
  value: string;
  error?: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  toggleCalendar: () => void;
}

export interface InputProps {
  $isInvalid?: boolean;
  $showClearButton: boolean;
}
