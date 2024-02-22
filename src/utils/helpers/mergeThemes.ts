import { ThemeType } from '@/types';

type ObjType = { [key: string]: string | ObjType };

export function mergeThemes(theme: ThemeType, customTheme?: ThemeType): ThemeType {
  if (!customTheme) return theme;

  /* eslint-disable no-restricted-syntax */
  const updateDefaultTheme = (obj: ObjType, secondObj: ObjType) => {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'object' && typeof secondObj[key] === 'object') {
        updateDefaultTheme(obj[key] as ObjType, secondObj[key] as ObjType);
      } else {
        obj[key] = secondObj?.[key] ?? obj[key];
      }
    }

    return obj;
  };

  return updateDefaultTheme(theme, customTheme);
}
