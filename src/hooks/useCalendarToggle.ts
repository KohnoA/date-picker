import { useCallback, useState } from 'react';

const INITIAL_CALENDAR_VISIBILITY = false;

export function useCalendarToggle() {
  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);

  const toggleVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  return { showCalendar, toggleVisibility };
}
