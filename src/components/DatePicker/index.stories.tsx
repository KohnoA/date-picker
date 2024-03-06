import type { Meta, StoryObj } from '@storybook/react';

import { CalendarView, CalendarWeekStart, DateFormats } from '@/constants';
import { theme } from '@/styles';

import { DatePicker } from './index';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    format: {
      options: [DateFormats.PRIMARY, DateFormats.SECONDARY],
      control: 'select',
      defaultValue: DateFormats.PRIMARY,
    },
    view: {
      options: [CalendarView.MONTH, CalendarView.WEEK, CalendarView.YEAR],
      control: 'select',
      defaultValue: CalendarView.MONTH,
    },
    initialDate: {
      control: 'date',
    },
    weekStart: {
      options: [CalendarWeekStart.MONDAY, CalendarWeekStart.SUNDAY],
      control: 'select',
      defaultValue: CalendarWeekStart.SUNDAY,
    },
    min: {
      control: 'date',
      defaultValue: 'none',
    },
    max: {
      control: 'date',
    },
    showHolidays: {
      control: 'boolean',
      defaultValue: false,
    },
    showWeekends: {
      control: 'boolean',
      defaultValue: true,
    },
    customTheme: {
      control: 'object',
    },
    range: {
      control: 'boolean',
      defaultValue: false,
    },
    onChange: {
      description: 'Optional change handler',
      type: 'function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Simple: Story = {
  render: (args) => {
    const { initialDate, min, max } = args;

    args.initialDate = initialDate && new Date(initialDate);
    args.min = min && new Date(min);
    args.max = max && new Date(max);

    return <DatePicker {...args} />;
  },
  args: {
    label: 'Date',
    showWeekends: true,
    showHolidays: true,
    weekStart: CalendarWeekStart.SUNDAY,
    view: CalendarView.MONTH,
    format: DateFormats.PRIMARY,
    min: new Date(2024, 0, 31),
    max: new Date(2024, 3, 1),
    customTheme: theme,
  },
};

export const Range: Story = {
  render: (args) => {
    const { initialStartDate, initialEndDate, min, max } = args;

    args.initialStartDate = initialStartDate && new Date(initialStartDate);
    args.initialEndDate = initialEndDate && new Date(initialEndDate);
    args.min = min && new Date(min);
    args.max = max && new Date(max);

    return <DatePicker {...args} />;
  },
  args: {
    label: 'Date range',
    showWeekends: true,
    showHolidays: true,
    weekStart: CalendarWeekStart.SUNDAY,
    view: CalendarView.MONTH,
    format: DateFormats.PRIMARY,
    min: new Date(2024, 0, 31),
    max: new Date(2024, 3, 1),
    customTheme: theme,
    range: true,
  },
};
