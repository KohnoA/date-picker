import type { Meta, StoryObj } from '@storybook/react';

import { CalendarView, CalendarWeekStart } from '@/constants';
import { theme } from '@/styles';

import { RangeDatePicker } from './index';

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    view: {
      options: [CalendarView.MONTH, CalendarView.WEEK, CalendarView.YEAR],
      control: 'select',
    },
    initialStartDate: {
      control: 'date',
    },
    initialEndDate: {
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
  },
};

export default meta;
type Story = StoryObj<typeof RangeDatePicker>;

export const Default: Story = {
  render: (args) => {
    const { initialStartDate, initialEndDate, min, max } = args;

    args.initialStartDate = initialStartDate && new Date(initialStartDate);
    args.initialEndDate = initialEndDate && new Date(initialEndDate);
    args.min = min && new Date(min);
    args.max = max && new Date(max);

    return <RangeDatePicker {...args} />;
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
