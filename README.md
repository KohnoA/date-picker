# Date Picker

***DatePicker*** - UI react component for working with various types of calendar.

[Online demo](https://date-picker-ivory.vercel.app/)

## Technologies
- [React](https://react.dev/)
- [Styled components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Jest](https://jestjs.io/ru/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Installation
```bash
$ yarn add kohnoa-date-picker
$ npm install kohnoa-date-picker
```

## Example
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker
      range
      initialStartDate={new Date(2024, 1, 1)}
      initialEndDate={new Date(2024, 1, 12)}
      onChange={(value: string) => {}}
    />
  );
}
```

## Documentation
### Custom Theme
You can change the theme of the DatePicker component
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker
      customTheme={{ 
        fontSizes: { lg: '16px' },
        borderRadius: { hight: '10px' },
      }}
    />
  );
}
```

#### Possible theme settings

```jsx
export interface ThemeType {
  datePickerMaxWidth: string;

  fontSizes: {
    lg: string;
    md: string;
    sm: string;
  };

  colors: {
    blue: string;
    blueTransparent: string;
    red: string;
    greyLight: string;
    greyNormal: string;
    greyNormalAlt: string;
    greyDark: string;
    black: string;
    white: string;
    backdrop: string;
  };

  borderRadius: {
    high: string;
    low: string;
  };

  opacity: {
    low: string;
    high: string;
  };

  margin: {
    lg: string;
    sm: string;
  };

  duration: string;
}
```

### Range
Get DatePicker with range selection
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker range />
  );
}
```

### Min and Max
You can limit the date selection range
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker 
      min={new Date(2024, 1, 1)}
      max={new Date(2024, 1, 10)}
    />
  );
}
```

### View
You can customize the calendar view. By week, month or with the ability to switch by year.
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker view='week' />
    {/* or */}
    <DatePicker view='month' />
    {/* or */}
    <DatePicker view='year' />
  );
}
```

### Week start
You can set the start of the week from Monday or Sunday.
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker weekStart="sunday" />
    {/* or */}
    <DatePicker weekStart='monday' />
  );
}
```

### Show holidays
Enable holiday display.
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker showHolidays />
  );
}
```

### Show weekends
Enable weekends display.
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker showWeekends />
  );
}
```

### Initial Dates
You can set the start date
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DayPicker initialDate={new Date(2024, 1, 1)} />
    {/* or for range date picker */}
    <DatePicker 
      initialStartDate={new Date(2024, 1, 1)}
      initialStartDate={new Date(2024, 1, 10)}
    />
  );
}
```
