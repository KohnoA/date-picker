import { createContext } from 'react';

import { DatePickerConfigType } from '@/types';

export const ConfigContext = createContext<DatePickerConfigType>({});
