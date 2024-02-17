import type { Meta, StoryObj } from '@storybook/react';

import { CalendarView, CalendarWeekStart } from '@/constants';

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
    colorOptions: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
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
    min: new Date(2024, 1, 1),
    max: new Date(2024, 3, 1),
  },
};
