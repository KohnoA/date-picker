import { DatePickerConfigType } from '@/types';

import { checkMaxDate, checkMinDate } from '../helpers';

export function revalidateDateRange(config: DatePickerConfigType): DatePickerConfigType {
  const configCopy = { ...config };
  const { initialStartDate, initialEndDate, min, max } = configCopy;

  if (initialStartDate && checkMaxDate(initialStartDate, initialEndDate)) {
    const startDate = initialStartDate;

    configCopy.initialStartDate = initialEndDate;
    configCopy.initialEndDate = startDate;
  }

  if (initialStartDate && checkMinDate(initialStartDate, min)) {
    configCopy.initialStartDate = min;
  }

  if (initialEndDate && checkMaxDate(initialEndDate, max)) {
    configCopy.initialEndDate = max;
  }

  return configCopy;
}
