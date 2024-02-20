import type { Meta, StoryObj } from '@storybook/react';

import { CalendarView, CalendarWeekStart } from '@/constants';
import { theme } from '@/styles';

import { DatePicker } from './index';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    view: {
      options: [CalendarView.MONTH, CalendarView.WEEK, CalendarView.YEAR],
      control: 'select',
    },
    initialDate: {
      control: 'date',
    },
    weekStart: {
      options: [CalendarWeekStart.MONDAY, CalendarWeekStart.SUNDAY],
      control: 'select',
    },
    min: {
      control: 'date',
    },
    max: {
      control: 'date',
    },
    showHolidays: {
      control: 'boolean',
    },
    showWeekends: {
      control: 'boolean',
    },
    customTheme: {
      control: 'object',
    },
    range: {
      control: 'boolean',
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
    label: 'Date',
    showWeekends: true,
    showHolidays: true,
    weekStart: CalendarWeekStart.SUNDAY,
    min: new Date(2024, 0, 31),
    max: new Date(2024, 3, 1),
    customTheme: theme,
    range: true,
  },
};
