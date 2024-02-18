import { ReactNode, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ConfigContext } from '@/context';
import { GlobalStyles, theme } from '@/styles';
import { DatePickerConfigType } from '@/types';
import { mergeThemes } from '@/utils';

interface DatePickerProviderProps {
  config: DatePickerConfigType;
  children: ReactNode;
}

export const DatePickerProvider = ({ config, children }: DatePickerProviderProps) => {
  const { customTheme, ...otherConfig } = config;

  const currentTheme = useMemo(() => mergeThemes(theme, customTheme), [customTheme]);

  return (
    <ErrorBoundary>
      <ConfigContext.Provider value={otherConfig}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ConfigContext.Provider>
    </ErrorBoundary>
  );
};
