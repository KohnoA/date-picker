import type { Meta, StoryObj } from '@storybook/react';

import { TodoList } from './index';

const meta: Meta<typeof TodoList> = {
  component: TodoList,
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const FirstStory: Story = {
  render: () => <TodoList />,
};
