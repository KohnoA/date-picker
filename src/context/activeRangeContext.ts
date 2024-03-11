import { createContext } from 'react';

export const ActiveRangeContext = createContext<{
  activeStartDay: number | null;
  activeEndDay: number | null;
  setActiveStartDay: (timestamp: number | null) => void;
  setActiveEndDay: (timestamp: number | null) => void;
  resetActiveRange: () => void;
}>({
  activeStartDay: null,
  activeEndDay: null,
  setActiveStartDay: () => {},
  setActiveEndDay: () => {},
  resetActiveRange: () => {},
});
