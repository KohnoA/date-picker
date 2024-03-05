import { ThemeType } from '@/types';

export const theme: Required<ThemeType> = {
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
    maxWidth: 250,

    fontFamily: `'Open-Sans', sans-serif`,

    fontWeight: {
      lg: 400,
      md: 600,
      bl: 700,
    },

    fontSizes: {
      lg: 15,
      md: 14,
      sm: 13,
    },

    borderRadius: {
      high: 8,
      low: 4,
    },

    opacity: {
      low: '0.7',
      high: '0.6',
    },

    margin: {
      lg: 25,
      sm: 8,
    },

    duration: 200,
  },
};
