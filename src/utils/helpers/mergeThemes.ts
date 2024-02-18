import { ThemeType } from '@/types';

export function mergeThemes(theme: ThemeType, customTheme?: Partial<ThemeType>) {
  if (!customTheme) return theme;

  return { ...theme, ...customTheme };
}
