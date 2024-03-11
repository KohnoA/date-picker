import { mergeThemes } from '../mergeThemes';

describe('Testing the mergeThemes function', () => {
  it('Simple cases should work', () => {
    const defaultTheme = {
      general: {
        duration: 300,
      },
    };

    const customTheme = {
      general: {
        duration: 200,
      },
    };

    const resultTheme = {
      general: {
        duration: 200,
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
        maxWidth: 250,
        duration: 300,
      },
    };

    const customTheme = {
      general: {
        duration: 200,
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
        maxWidth: 250,
        duration: 200,
      },
    };

    expect(mergeThemes(defaultTheme, customTheme)).toEqual(resultTheme);
  });
});
