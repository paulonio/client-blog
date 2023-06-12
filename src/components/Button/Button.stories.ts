import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: { controls: { exclude: 'buttonType' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'button',
    children: 'Click me',
  },
};

export const Link: Story = {
  args: {
    type: 'button',
    children: 'View all',
    buttonType: 'link',
  },
};
