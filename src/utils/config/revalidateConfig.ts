import { DatePickerConfigType } from '@/types';

export function revalidateConfig(
  config: DatePickerConfigType,
  ...funcs: Array<(config: DatePickerConfigType) => DatePickerConfigType>
) {
  return funcs.reduce((acc, func) => func(acc), config);
}
