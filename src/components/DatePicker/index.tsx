import { useCallback, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Calendar } from '@/components/Calendar';
import { DateInput } from '@/components/DateInput';
import { ConfigContext } from '@/context';
import { GlobalStyles, theme } from '@/styles';
import { DatePickerConfigType } from '@/types';
import { mergeThemes } from '@/utils';

import { Container } from './styled';

const INITIAL_CALENDAR_VISIBILITY = false;
const INITIAL_ACTIVE_DAY_VALUE = null;

interface DatePickerProps extends DatePickerConfigType {
  label?: string;
  initialDate?: Date;
}

export const DatePicker = (props: DatePickerProps) => {
  const { initialDate, customTheme, ...config } = props;

  const [showCalendar, setShowCalendar] = useState<boolean>(INITIAL_CALENDAR_VISIBILITY);
  const [activeDay, setActiveDay] = useState<number | null>(
    initialDate ? initialDate.getTime() : INITIAL_ACTIVE_DAY_VALUE,
  );

  const currentTheme = useMemo(() => mergeThemes(theme, customTheme), [customTheme]);

  const toggleCalendarVisibility = useCallback(() => setShowCalendar((prev) => !prev), []);

  const setActiveDayHandler = useCallback((timestamp: number) => {
    setActiveDay(timestamp);
  }, []);

  const resetActiveDayHandler = useCallback(() => {
    setActiveDay(INITIAL_ACTIVE_DAY_VALUE);
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />

        <Container>
          <DateInput
            activeDay={activeDay}
            setActiveDay={setActiveDayHandler}
            resetActiveDay={resetActiveDayHandler}
            toggleCalendar={toggleCalendarVisibility}
          />

          <Calendar
            activeDay={activeDay}
            showCalendar={showCalendar}
            setActiveDay={setActiveDayHandler}
            onClear={resetActiveDayHandler}
          />
        </Container>
      </ThemeProvider>
    </ConfigContext.Provider>
  );
};
