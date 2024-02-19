import { createContext } from 'react';

export const ActiveRangeContext = createContext<{
  activeStartDay: number | null;
  activeEndDay: number | null;
  setActiveStartDay: (timestamp: number) => void;
  setActiveEndDay: (timestamp: number) => void;
  resetActiveRange: () => void;
}>({
  activeStartDay: null,
  activeEndDay: null,
  setActiveStartDay: () => {},
  setActiveEndDay: () => {},
  resetActiveRange: () => {},
});
