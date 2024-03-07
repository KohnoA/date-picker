# Date Picker

**_DatePicker_** - UI react component for working with various types of calendar.

## Demo

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

### Initial Dates

You can pass initial values.

- ```Simple Date Picker``` - If the start date is less than the minimum, then it will be redefined and will be equal to the minimum date. Same with the maximum date. Also, if initialStartDate or initialEndDate is passed, they will be ignored.
- ```Range Date Picker``` - If the start date is greater than the end date, then they will swap places. If the start date is less than the minimum, then it will be redefined to the minimum date. Likewise with the end date and maximum value. Also, if initialDate is passed, this value will be ignored.

```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return (
    <DatePicker initialDate={new Date(2024, 1, 1)} />
    {/* or for range date picker */}
    <DatePicker
      range
      initialStartDate={new Date(2024, 1, 1)}
      initialStartDate={new Date(2024, 1, 10)}
    />
  );
}
```

### Custom Theme

You can change the theme of the DatePicker component

```jsx
import { DatePicker } from 'kohnoa-date-picker';

const customTheme = {
  input: {
    label: '#333333',
    placeholder: '#BBBBBB',
  },
  calendar: {
    text: '#333333',
    icons: '#333333',
  }
};

export default function Example() {
  return <DatePicker customTheme={customTheme} />;
}
```

#### Possible theme settings

```jsx
export interface CustromThemeType {
  input: {
    placeholder: string,
    text: string,
    icons: string,
    background: string,
    border: string,
    error: string,
  },

  calendar: {
    background: string,
    border: string,
    text: string,
    icons: string,
    hover: string,
    cell: {
      active: string,
      range: string,
      holiday: string,
      indicator: string,
    },
  },

  todos: {
    backdrop: string,
    background: string,
    text: string,
    placeholder: string,
    icons: string,
    border: string,
    addButton: {
      text: string,
      background: string,
    }
  },

  general: {
    maxWidth: number,

    fontFamily: string,

    fontWeight: {
      lg: number,
      md: number,
      bl: number,
    }

    fontSizes: {
      lg: number,
      md: number,
      sm: number,
    },

    borderRadius: {
      high: number,
      low: number,
    },

    opacity: {
      low: string,
      high: string,
    },

    margin: {
      lg: number,
      sm: number,
    },

    duration: number,
  },
}

```

### Format
Supported formats:
- ```DD/MM/YYYY```
- ```MM/DD/YYYY```
```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return <DatePicker format="MM/DD/YYYY" />;
}
```

### Range

Get DatePicker with range selection. By default is false.

```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return <DatePicker range />;
}
```

### Min and Max

You can limit the date selection range. If the minimum value exceeds the maximum, they will swap places.

```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return <DatePicker min={new Date(2024, 1, 1)} max={new Date(2024, 1, 10)} />;
}
```

### View

You can customize the calendar view. By week, month or with the ability to switch by year.

- ```week``` - Includes weekly view.
- ```month (default)``` - Includes monthly view.
- ```year``` - Enables display of additional buttons to navigate by year.

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

You can set the start of the week from Monday or Sunday. Supported options:

- ```monday```
- ```sunday (default)```

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

Enable holiday display. By default is disabled.

```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return <DatePicker showHolidays />;
}
```

### Show weekends

Manage holiday display. By default is true

```jsx
import { DatePicker } from 'kohnoa-date-picker';

export default function Example() {
  return <DatePicker showWeekends={false} />;
}
```
