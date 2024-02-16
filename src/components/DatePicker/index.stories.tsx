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
      options: CalendarView,
      control: 'select',
    },
    initialDate: {
      control: 'date',
    },
    weekStart: {
      options: CalendarWeekStart,
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
  render: () => <DatePicker />,
};
