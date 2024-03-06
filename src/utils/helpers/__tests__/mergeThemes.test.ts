import { mergeThemes } from '../mergeThemes';

describe('Testing the mergeThemes function', () => {
  it('Simple cases should work', () => {
    const defaultTheme = {
      general: {
        duration: '300ms',
      },
    };

    const customTheme = {
      general: {
        duration: '200ms',
      },
    };

    const resultTheme = {
      general: {
        duration: '200ms',
      },
    };

    expect(mergeThemes(defaultTheme, customTheme)).toEqual(resultTheme);
  });

  it('Should wwork with hard case', () => {
    const defaultTheme = {
      input: {
        text: '#000000',
      },
      calendar: {
        text: '#000000',
      },
      general: {
        maxWidth: '250px',
        duration: '300ms',
      },
    };

    const customTheme = {
      general: {
        duration: '200ms',
      },
    };

    const resultTheme = {
      input: {
        text: '#000000',
      },
      calendar: {
        text: '#000000',
      },
      general: {
        maxWidth: '250px',
        duration: '200ms',
      },
    };

    expect(mergeThemes(defaultTheme, customTheme)).toEqual(resultTheme);
  });
});
