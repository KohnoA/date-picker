import { ThemeType } from '@/types';

export const theme: ThemeType = {
  input: {
    label: '#333333',
    placeholder: '#BBBBBB',
    text: '#333333',
    icons: '#AAAAAA',
    background: '#FFFFFF',
    border: '#DDDDDD',
    error: '#FF0000',
  },

  calendar: {
    background: '#FFFFFF',
    border: '#DDDDDD',
    text: '#333333',
    icons: '#333333',
    hover: '#F1F1F1',
    cell: {
      active: '#2F80ED',
      range: '#2F80ED10',
      holiday: '#FF0000',
      indicator: '#FF0000',
    },
  },

  todos: {
    backdrop: '#00000033',
    background: '#FFFFFF',
    text: '#333333',
    placeholder: '#BBBBBB',
    icons: '#333333',
    border: '#DDDDDD',
    addButton: {
      text: '#FFFFFF',
      background: '#2F80ED',
    },
  },

  general: {
    maxWidth: '250px',

    fontFamily: `'Open-Sans', sans-serif`,

    fontSizes: {
      lg: '15px',
      md: '14px',
      sm: '13px',
    },

    borderRadius: {
      high: '8px',
      low: '4px',
    },

    opacity: {
      low: '0.7',
      high: '0.6',
    },

    margin: {
      lg: '25px',
      sm: '8px',
    },

    duration: '200ms',
  },
};
