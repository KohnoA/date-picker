import { DatePickerConfigType } from '@/types';

import { checkMaxDate, checkMinDate } from '../helpers';

export function revalidateInitialDate(config: DatePickerConfigType): DatePickerConfigType {
  const configCopy = { ...config };
  const { initialDate, min, max } = config;

  if (initialDate && checkMinDate(initialDate, min)) {
    configCopy.initialDate = min;
  }

  if (initialDate && checkMaxDate(initialDate, max)) {
    configCopy.initialDate = max;
  }

  return configCopy;
}
