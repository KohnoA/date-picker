import type { Meta, StoryObj } from '@storybook/react';

import { DateInput } from './index';

const meta: Meta<typeof DateInput> = {
  component: DateInput,
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const FirstStory: Story = {
  render: () => <DateInput />,
};
