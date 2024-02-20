import { ComponentType, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ConfigContext } from '@/context';
import { GlobalStyles, theme } from '@/styles';
import { DatePickerConfigType } from '@/types';
import { mergeThemes } from '@/utils';

export const withProviders =
  (WrappedComponent: ComponentType, config: DatePickerConfigType) => () => {
    const { customTheme, ...otherConfig } = config;

    const currentTheme = useMemo(() => mergeThemes(theme, customTheme), [customTheme]);

    return (
      <ErrorBoundary>
        <ConfigContext.Provider value={otherConfig}>
          <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <WrappedComponent />
          </ThemeProvider>
        </ConfigContext.Provider>
      </ErrorBoundary>
    );
  };
