import { ThemeType } from '@/types';

type ThemeObjType = { [key: string]: string | number | ThemeObjType };

export function mergeThemes(theme: ThemeType, customTheme?: ThemeType): ThemeType {
  if (!customTheme) return theme;

  const updateDefaultTheme = (themeObj: ThemeObjType, customThemeObj: ThemeObjType) => {
    Object.keys(themeObj).forEach((key) => {
      if (typeof themeObj[key] === 'object' && typeof customThemeObj[key] === 'object') {
        updateDefaultTheme(themeObj[key] as ThemeObjType, customThemeObj[key] as ThemeObjType);
      } else {
        themeObj[key] = customThemeObj?.[key] ?? themeObj[key];
      }
    });

    return themeObj;
  };

  return updateDefaultTheme(theme, customTheme);
}
