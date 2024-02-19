import { createContext } from 'react';

export const ActiveDayContext = createContext<{
  activeDay: number | null;
  setActiveDay: (newActiveDay: number | null) => void;
}>({ activeDay: null, setActiveDay: () => {} });
