import { ColorOptionsType } from '@/types';

import { colors } from './styleVars';

export const DEFAULT_COLOR_OPTIONS: ColorOptionsType = {
  input: {
    text: colors.black,
    border: colors.greyLight,
    background: colors.white,
    icons: colors.greyDark,
    placeholder: colors.greyNormal,
  },
  calendar: {
    text: colors.black,
    border: colors.greyLight,
    background: colors.white,
    icons: colors.black,
    indicator: colors.red,
    holiday: colors.red,
    currentDay: colors.blue,
  },
  todoList: {
    text: colors.black,
    border: colors.greyLight,
    background: colors.white,
    icons: colors.black,
    button: colors.blue,
    placeholder: colors.greyNormal,
  },
};
