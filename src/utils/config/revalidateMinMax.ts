import { DatePickerConfigType } from '@/types';

import { checkMaxDate } from '../helpers';

export function revalidateMinMax(config: DatePickerConfigType): DatePickerConfigType {
  const configCopy = { ...config };
  const { min, max } = configCopy;

  if (min && checkMaxDate(min, max)) {
    const prevMaxDate = max;

    configCopy.max = min;
    configCopy.min = prevMaxDate;
  }

  return configCopy;
}
